import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  availableGroups;
  activeGroupId: number;

  constructor(
    private authSerivice: AuthService,
    private router: Router,
    private dataService: DataService
  ) { 

  }

  ngOnInit() {
    this.dataService.getMyGroups().subscribe(data => {
      this.authSerivice.me().subscribe(me => {
        this.availableGroups = data;
        this.activeGroupId = me['activeGroupId'];
      })
    })
  }

  setActiveGroup(groupId: number){
    console.log(groupId);
    this.dataService.setActiveGroup(groupId).subscribe(data => {
      this.router.navigateByUrl('/redirect');
    })
  }
  
  handleLogout(){
    this.authSerivice.logout();
    this.router.navigateByUrl('/');
  }

}
