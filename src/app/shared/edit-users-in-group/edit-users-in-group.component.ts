import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-users-in-group',
  templateUrl: './edit-users-in-group.component.html',
  styleUrls: ['./edit-users-in-group.component.css']
})
export class EditUsersInGroupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
   }

  me;
  groupName;
  groupId;

  searchText: string;
  users;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = params['groupId'];

      console.log(this.groupId);

      if(!this.groupId){
        this.authService.me().subscribe(me => {
          this.me = me;
          this.groupId = this.me['activeGroupId'];
          
          this.loadData();
        });
      }
      else{
        this.loadData();
      }
    })
  }

  loadData(){
    this.dataService.getAllUsersByType(this.groupId).subscribe(data => {
      console.log(data);
      this.users = data['userList'];
      this.groupName = data['groupName'];
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
