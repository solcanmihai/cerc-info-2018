import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-recomended-lessons',
  templateUrl: './student-recomended-lessons.component.html',
  styleUrls: ['./student-recomended-lessons.component.css']
})
export class StudentRecomendedLessonsComponent implements OnInit {

  groupId: number;
  lessons;
  lessonsx;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getLessonsWithRecommended().subscribe(lessons => {
      this.lessonsx = lessons;
      this.lessons = this.lessonsx.filter(x => x.isRecommended);
    })
  }

}
