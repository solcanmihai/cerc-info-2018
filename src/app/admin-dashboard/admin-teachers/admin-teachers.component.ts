import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.css']
})
export class AdminTeachersComponent implements OnInit {

  teachers;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.teachers = data;
      this.teachers = this.teachers.filter(teacher => teacher['privilege'] == 1);
    })
  }

}
