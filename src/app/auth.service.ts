import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Details } from 'src/app/classes/details';
import { API } from 'src/app/classes/globals';


@Injectable()
export class AuthService {
  private token: string;
  private privileges: string;

  constructor(private http: HttpClient) { 
    this.token = null;
  }

  // register(details: Details):Observable<boolean>{
  //   return new Observable((observer) => {
  //     this.http.post(API + '/signup', details).subscribe((data) => {
  //       if(data['error'] != undefined){
  //         observer.next(false);
  //       }
  //       else{
  //         observer.next(true);
  //       }
  //     });
  //   })
  // }

  login(details): Observable<string>{
    return new Observable((observer) => {
      this.http.post(API + '/login', details).subscribe(data => {
        if(data['error'] != undefined){
          observer.next(data['error']);
        }
        else{
          this.token = data['token'];
          localStorage.setItem('token', this.token);
          observer.next(null);
        }
      });
    });
  }

  getPrivileges():Observable<string>{
    if(this.privileges != null && this.privileges != undefined){
      return new Observable(observer => observer.next(this.privileges));
    }
    return new Observable(observer => {
      this.me().subscribe(data => {
        observer.next(data['privileges']);
      })
    })
    
  }

  me(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken()
    });

    return this.http.get(API + '/me', {headers: headers});
  }

  logout(){
    localStorage.removeItem('token');
    this.token = null;
  }

  checkLocalStorage(){
    if(this.token == null){
      this.token = localStorage.getItem('token');
    }
  }

  getToken(){
    this.checkLocalStorage();
    return this.token;
  }

  isLoggedIn():boolean{
    this.checkLocalStorage();

    console.log('Token: ' + this.token);

    if(this.token != null){
      return true;
    }
    return false;
  }

}
