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

  //Groups

  getGroups(){
    return this.http.get(API + '/groups', {headers: this.headers});
  }

  getGroup(groupId){
    return this.http.get(API + '/groups/' + groupId, {headers: this.headers});
  }

  addGroup(title: string, description: string){
    let body = {
      name: title,
      description: description
    }

    return this.http.post(API + '/groups', body, {headers: this.headers});
  }

  deleteGroup(id: number){
    return this.http.delete(API + '/groups/' + id, {headers: this.headers});
  }

  //Users

  getUsers(){
    return this.http.get(API + '/users', {headers: this.headers});
  }

  validateRegisterToken(code){
    return this.http.get(API + '/invite/validate/' + code);
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

  //Lessons

  getLessons(groupId: number){
    return this.http.get(API + '/groups/' + groupId + '/lessons', {headers: this.headers});
  }

  getLessonById(lessonId: number, groupId: number){
    return this.http.get(API + '/groups/' + groupId + '/lessons/' + lessonId, {headers: this.headers});
  }

  editLesson(lessonId: number, groupId: number, lesson){
    return this.http.put(API + '/groups/' + groupId + '/lessons/' + lessonId, lesson, {headers: this.headers});
  }

  deleteLessonById(groupId, lessonId){
    return this.http.delete(API + '/groups/' + groupId + '/lessons/' + lessonId, {headers: this.headers});
  }

  addLesson(groupId, lesson){
    return this.http.post(API + '/groups/' + groupId + '/lessons', lesson, {headers: this.headers});
  }

  
}
