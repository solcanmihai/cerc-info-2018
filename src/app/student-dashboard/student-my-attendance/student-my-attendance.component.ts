import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-student-my-attendance',
  templateUrl: './student-my-attendance.component.html',
  styleUrls: ['./student-my-attendance.component.css']
})
export class StudentMyAttendanceComponent implements OnInit {

  me;
  prezenta;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.me = me;
    })

    this.dataService.getMyAttendance().subscribe(data => {
      this.prezenta = data;
    })
  }

}
