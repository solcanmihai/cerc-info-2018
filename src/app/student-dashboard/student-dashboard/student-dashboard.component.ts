import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  availableGroups;
  activeGroupId: number;
  activeGroupName: string;

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
        this.activeGroupName = me['activeGroupName'];
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
