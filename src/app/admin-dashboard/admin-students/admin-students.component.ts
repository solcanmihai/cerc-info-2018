import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {

  students;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.students = data;
      this.students = this.students.filter(student => student['privilege'] == 0);
    })
  }

}
