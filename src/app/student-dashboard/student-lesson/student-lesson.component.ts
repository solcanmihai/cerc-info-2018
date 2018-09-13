import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { API } from 'src/app/classes/globals';


@Component({
  selector: 'app-student-lesson',
  templateUrl: './student-lesson.component.html',
  styleUrls: ['./student-lesson.component.css']
})
export class StudentLessonComponent implements OnInit {

  lessonId;
  groupId;
  lesson;
  api;

  newComment: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.api = API;
    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];
      this.loadData(); 
    });
  }

  loadData(){
    this.dataService.getLessonById(this.lessonId).subscribe(lesson => {
      this.lesson = lesson;

      this.lesson['comments'].map(x => {
        x.showReplyForm = false;
      })

      console.log(this.lesson);
    })
  }

  addNewComment(){
    this.dataService.addCommentToLesson(this.lessonId, this.newComment).subscribe(data => {
      this.newComment = '';
      this.loadData();
    })
  }

  replyToComment(comment){
    console.log(comment);
    this.dataService.addReplyToComment(comment.commentId, comment.newReply).subscribe(data => {
      this.loadData();
    })
  }

  toggleForm(commentId){
    this.lesson['comments'].map(x => {
      if(x['commentId'] == commentId){
        x.showReplyForm = !x.showReplyForm;
      }
    })
  }

  addReply(commentId){
    this.toggleForm(commentId);
  }
}
