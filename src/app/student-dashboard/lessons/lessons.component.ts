import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

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
