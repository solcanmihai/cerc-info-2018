import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
