import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-teacher-prezenta',
  templateUrl: './teacher-prezenta.component.html',
  styleUrls: ['./teacher-prezenta.component.css']
})
export class TeacherPrezentaComponent implements OnInit {
  
  attendanceList;
  newDate;
  @ViewChild('closeModalAttendance') closeModalAttendance: ElementRef;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.dataService.getAttendances(me['activeGroupId']).subscribe(data => {
        this.attendanceList = data;
      })
    })
  }

  createNewAttendance(){
    this.authService.me().subscribe(me => {
      this.dataService.newAttendance(me['activeGroupId'], this.newDate).subscribe(data => {
        this.router.navigateByUrl('/teacher-dashboard/prezenta/' + data['attendanceId']);
        this.closeModalAttendance.nativeElement.click();
      })
    })
  }

}
