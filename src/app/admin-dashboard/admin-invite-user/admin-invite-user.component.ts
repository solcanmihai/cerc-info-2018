import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-invite-user',
  templateUrl: './admin-invite-user.component.html',
  styleUrls: ['./admin-invite-user.component.css']
})
export class AdminInviteUserComponent implements OnInit {

  groups;

  userType;
  email;
  selectedGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getGroups().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    })
  }

  handleSubmit(){
    this.dataService.inviteUser(this.email, this.selectedGroup.groupId, this.userType);
  }
}
