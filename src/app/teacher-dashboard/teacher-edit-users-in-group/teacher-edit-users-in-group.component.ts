import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-teacher-edit-users-in-group',
  templateUrl: './teacher-edit-users-in-group.component.html',
  styleUrls: ['./teacher-edit-users-in-group.component.css']
})
export class TeacherEditUsersInGroupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  me;
  groupName;
  groupId;

  searchText: string;
  users;

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.me = me;
      this.groupName = this.me['activeGroupName'];
      this.groupId = this.me['activeGroupId'];
      
      this.loadData();
    });
  }

  loadData(){
    this.dataService.getAllUsersByType(this.groupId).subscribe(data => {
      this.users = data;
    })
  }

  toggleUser(user){
    this.dataService.toggleUserInGroup(user.userId, this.groupId).subscribe(data => {
      this.loadData();
    })
  }

  getUsersInGroup(){
    return this.users.filter(x => x.inGroup);
  }

  getUsersNotInGroup(){
    return this.users.filter(x => !x.inGroup);
  }

}
