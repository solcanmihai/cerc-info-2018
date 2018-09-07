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

  getMyGroups(){
    return this.http.get(API + '/groups/my', {headers: this.headers});
  }

  setActiveGroup(groupId: number){
    return this.http.post(API + '/me/active-group', {groupId}, {headers: this.headers});
  }

  getGroup(groupId){
    return this.http.get(API + '/groups/' + groupId, {headers: this.headers});
  }

  addGroup(title: string, description: string, startDate: string, endDate: string){
    let body = {
      name: title,
      description: description,
      startDate,
      endDate
    }

    return this.http.post(API + '/groups', body, {headers: this.headers});
  }

  getAllUsersByType(groupId: number){
    return this.http.get(API + '/groups/' + groupId + '/all-users', {headers: this.headers});
  }

  deleteGroup(id: number){
    return this.http.delete(API + '/groups/' + id, {headers: this.headers});
  }

  //Users

  register(name: string, password: string, inviteCode: string){
    let body = {
      name, password, inviteCode
    }

    return this.http.post(API + '/register', body, {headers: this.headers});
  }

  getUsers(){
    return this.http.get(API + '/users', {headers: this.headers});
  }

  validateRegisterToken(code){
    return this.http.get(API + '/invite/validate/' + code);
  }

  inviteUser(email, groupId, typeOfUser){
    let body = {email: email, groupId: groupId, type: typeOfUser.toLowerCase()};

    this.http.post(API + '/invite', body, {headers: this.headers}).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }

  toggleUserInGroup(userId: number, groupId: number){
    return this.http.get(API + '/groups/' + groupId + '/' + userId + '/toggle', {headers: this.headers});
  }

  //Lessons

  getLessonsWithRecommended(){
    return this.http.get(API + '/recommended-lessons', {headers: this.headers});
  }

  toggleLessonActive(lessonId: number){
    return this.http.get(API + '/recommended-lessons/' + lessonId + '/toggle', {headers: this.headers});
  }

  getLessons(){
    return this.http.get(API + '/lessons', {headers: this.headers});
  }

  getLessonById(lessonId: number){
    return this.http.get(API + '/lessons/' + lessonId, {headers: this.headers});
  }

  editLesson(lessonId: number, lesson){
    return this.http.put(API + '/lessons/' + lessonId, lesson, {headers: this.headers});
  }

  deleteLessonById(lessonId){
    return this.http.delete(API +  '/lessons/' + lessonId, {headers: this.headers});
  }

  addLesson(groupId, lesson, files){
    const uploadData = new FormData();

    for(let i =0; i < files.length; i++){
      uploadData.append("uploads", files[i], files[i]['name']);
    }

    lesson.tags = lesson.tags.join();

    Object.keys(lesson).forEach(key => {
      const value = lesson[key];
      uploadData.append(key, value);
    });

    return this.http.post(API + '/lessons', uploadData, {headers: this.headers});
  }

  //Attendance

  getAttendanceList(attendanceId: number){
    return this.http.get(API + '/attendance/users/' + attendanceId, {headers: this.headers});
  }

  toggleUserStatus(attendanceId: number, userId: number){
    return this.http.get(API + '/attendance/' + attendanceId + '/' + userId + '/toggle');
  }

  getAttendances(groupId: number){
    return this.http.get(API + '/attendance/' + groupId, {headers: this.headers});
  }

  newAttendance(groupId: number, date: string){
    return this.http.post(API + '/attendance/' + groupId + '/' + date, {}, {headers: this.headers});
  }
  
}
