import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-teacher-homework-list',
  templateUrl: './teacher-homework-list.component.html',
  styleUrls: ['./teacher-homework-list.component.css']
})
export class TeacherHomeworkListComponent implements OnInit {

  homeworkList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getHomeworkList().subscribe(data => {
      this.homeworkList = data;
    })
  }

}
