import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-teacher-lessons',
  templateUrl: './teacher-lessons.component.html',
  styleUrls: ['./teacher-lessons.component.css']
})
export class TeacherLessonsComponent implements OnInit {

  groupId: number;
  lessons;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getLessons().subscribe(lessons => {
      this.lessons = lessons;
      console.log(lessons);
    })
  }

}
 