import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-edit-recommended-lessons',
  templateUrl: './edit-recommended-lessons.component.html',
  styleUrls: ['./edit-recommended-lessons.component.css']
})
export class EditRecommendedLessonsComponent implements OnInit {

  groupId;
  groupName;

  lessons;

  searchText: string;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.groupId = me['activeGroupId'];
      this.groupName = me['activeGroupName'];
    });

    this.dataService.getLessonsWithRecommended().subscribe(data => {
      this.lessons = data;
      console.log(data);
    })
  }

  toggleLesson(lesson){
    let pos = this.lessons.findIndex(x => x.lessonId == lesson.lessonId);
    this.lessons[pos].isRecommended = !this.lessons[pos].isRecommended;

    this.dataService.toggleLessonActive(lesson.lessonId).subscribe(data => {
      //do nothing
    })
  }

  getRecommendedLessons(){
    return this.lessons.filter(x => x.isRecommended);
  }

  getNotRecommendedLessons(){
    return this.lessons.filter(x => !x.isRecommended);
  }
}
