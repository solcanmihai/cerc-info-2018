import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

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
