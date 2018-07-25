import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from 'src/app/classes/globals';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class DataService {
  constructor(
    private http: HttpClient,
    private authSerivce: AuthService,
    private router: Router
  ) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authSerivce.getToken()
    });
  }

  private headers;

  getGroups(){
    return this.http.get(API + '/group', {headers: this.headers});
  }

  addGroup(title: string, description: string){
    let body = {
      name: title,
      description: description
    }

    this.http.post(API + '/group', body, {headers: this.headers}).subscribe(data => {
      //do nothing
    });
  }

  getUsers(){
    return this.http.get(API + '/user', {headers: this.headers});
  }

  inviteUser(email, groupId, typeOfUser){
    let body = {email: email, group_id: groupId};

    console.log(typeOfUser);

    if(typeOfUser == 'Profesor'){
      this.http.post(API + '/invite/teacher', body, {headers: this.headers}).subscribe(data => {
        this.router.navigateByUrl('/');
      });
    }
    else if(typeOfUser == 'Elev'){
      this.http.post(API + '/invite/student', body, {headers: this.headers}).subscribe(data => {
        this.router.navigateByUrl('/');
      });
    }
    else{
      console.log('Mozzart');
    }
  }
}
