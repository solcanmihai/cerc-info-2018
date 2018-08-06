import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(
    private authSerivice: AuthService,
    private router: Router
  ) { 

  }

  ngOnInit() {
  }
  
  handleLogout(){
    this.authSerivice.logout();
    this.router.navigateByUrl('/');
  }

}
