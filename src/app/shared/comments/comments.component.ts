import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments;
  @Input() dataId;

  //Lesson or Homework
  @Input() pageType;

  //Local stuff
  newComment: string;

  constructor(
    private dataService: DataService
  ) { }

  loadData(){
    if(this.pageType == 'Lesson'){
      this.dataService.getCommentsFromLesson(this.dataId).subscribe(data => {
        this.comments = data;
        this.comments.map(x => {
          x.showReplyForm = false;
        })
      })
    }
    else if(this.pageType = 'Homework'){
      this.dataService.getCommentsFromHomework(this.dataId).subscribe(data => {
        this.comments = data;
        this.comments.map(x => {
          x.showReplyForm = false;
        })
      })
    }
  }

  ngOnInit() {
    console.log(this.dataId, this.pageType);
    this.loadData();
  }

  addNewComment(){
    if(this.pageType == 'Lesson'){
      this.dataService.addCommentToLesson(this.dataId, this.newComment).subscribe(data => {
        this.newComment = '';
        this.loadData();
      })
    }
    else if(this.pageType == 'Homework'){
      this.dataService.addCommentToHomework(this.dataId, this.newComment).subscribe(data => {
        this.newComment = '';
        this.loadData();
      })
    }
  }

  replyToComment(comment){
    if(this.pageType == 'Lesson'){
      this.dataService.addReplyToCommentLesson(comment.commentId, comment.newReply).subscribe(data => {
        this.loadData();
      })
    }
    else if(this.pageType == 'Homework'){
      this.dataService.addReplyToCommentHomework(comment.commentId, comment.newReply).subscribe(data => {
        this.loadData();
      })
    }
  }

  toggleForm(commentId){
    this.comments.map(x => {
      if(x['commentId'] == commentId){
        x.showReplyForm = !x.showReplyForm;
      }
    })
  }

  addReply(commentId){
    this.toggleForm(commentId);
  }
}
