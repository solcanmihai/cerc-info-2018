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

  

  //Homework

  getHomeworkById(homeworkId: number){
    return this.http.get(API + '/homework/' + homeworkId, {headers: this.headers});
  }

  submitHomework(homeworkData){
    return this.http.post(API + '/homework', homeworkData, {headers: this.headers});
  }

  putHomework(homeworkData, homeworkId){
    return this.http.put(API + '/homework/' + homeworkId, homeworkData, {headers: this.headers});
  }

  getHomeworkList(){
    return this.http.get(API + '/homework', {headers: this.headers});
  }

  deleteHomework(homeworkId){
    return this.http.delete(API + '/homework/' + homeworkId, {headers: this.headers});
  }

  //Submit homework

  getSubmitForTeacher(submitId){
    return this.http.get(API + '/submit/' + submitId, {headers: this.headers});
  }

  getSubmits(homeworkId){
    return this.http.get(API + '/submit/by-homework/' + homeworkId, {headers: this.headers});
  }

  getSubmit(homeworkId){
    return this.http.get(API + '/submit/' + homeworkId, {headers: this.headers});
  }

  submitHomeworkSubmit(homeworkId, homework){
    const uploadData = new FormData();

    console.log(homework);

    let x = 0;

     for(let i = 0; i < homework.length; i++){
       if(homework[i].file){
        uploadData.append("uploads", homework[i].file[0], homework[i].file[0]['name']);
        homework[i]['fileIndex'] = x;
        x++;
        delete homework[i].file;
       }
     }

    // lesson.tags = lesson.tags.join();

    // uploadData.append('oldFiles', oldFiles);

    uploadData.append('submitData', JSON.stringify(homework));


    return this.http.post(API + '/submit/' + homeworkId, uploadData, {headers: this.headers});
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

  editLesson(lessonId: number, lesson, files, oldFiles){
    const uploadData = new FormData();

    console.log(oldFiles);
    oldFiles = oldFiles.map(x => x['url'].split('/')[3]);
    delete lesson.uploads;

    console.log(files);

    for(let i = 0; i < files.length; i++){
      uploadData.append("uploads", files[i], files[i]['name']);
    }

    lesson.tags = lesson.tags.join();

    uploadData.append('oldFiles', oldFiles);

    Object.keys(lesson).forEach(key => {
      const value = lesson[key];
      uploadData.append(key, value);
    });
    return this.http.put(API + '/lessons/' + lessonId, uploadData, {headers: this.headers});
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

    console.log(uploadData);

    return this.http.post(API + '/lessons', uploadData, {headers: this.headers});
  }

  //Comments
  
  getCommentsFromLesson(lessonId){
    return this.http.get(API + '/lesson-comments/' + lessonId, {headers: this.headers});
  }
  
  getCommentsFromHomework(homeworkId){
    return this.http.get(API + '/homework-comments/' + homeworkId, {headers: this.headers});
  }

  addCommentToLesson(lessonId: number, content: string){
    return this.http.post(API + '/lesson-comments', {lessonId, content}, {headers: this.headers});
  }

  addCommentToHomework(homeworkId: number, content: string){
    return this.http.post(API + '/homework-comments', {homeworkId, content}, {headers: this.headers});
  }

  addReplyToCommentLesson(commentId, content){
    return this.http.post(API + '/lesson-comments/reply', {commentId, content}, {headers: this.headers});
  }

  addReplyToCommentHomework(commentId, content){
    return this.http.post(API + '/homework-comments/reply', {commentId, content}, {headers: this.headers});
  }

  deleteLessonComment(commentId){
    return this.http.delete(API + '/lesson-comments/' + commentId, {headers: this.headers});
  }
  
  deleteHomeworkComment(commentId){
    return this.http.delete(API + '/homework-comments/' + commentId, {headers: this.headers});
  }

  //Attendance

  getAttendanceList(attendanceId: number){
    return this.http.get(API + '/attendance/users/' + attendanceId, {headers: this.headers});
  }

  toggleUserStatus(attendanceId: number, userId: number){
    return this.http.get(API + '/attendance/' + attendanceId + '/' + userId + '/toggle');
  }

  getAttendances(){
    return this.http.get(API + '/attendance/', {headers: this.headers});
  }

  newAttendance(date: string){
    return this.http.post(API + '/attendance/' + date, {}, {headers: this.headers});
  }

  getMyAttendance(){
    return this.http.get(API + '/attendance', {headers: this.headers});
  }

  getUsersWithAttendance(){
    return this.http.get(API + '/attendance/stats', {headers: this.headers});
  }

  getAttendanceSheet(){
    return this.http.get(API + '/attendance/sheet', {headers: this.headers, responseType: 'blob', observe: 'response'});
  }

  getAttendanceForStudent(userId){
    return this.http.get(API + '/attendance/by-user/' + userId, {headers: this.headers});
  }
}
