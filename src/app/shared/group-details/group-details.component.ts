import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  id;
  group;
  privilege;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.group = new Object();

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id == undefined){
        this.authService.me().subscribe(me => {
          this.id = me['activeGroupId'];
          this.privilege = me['privilege'];
          this.loadData();
        })
      }
      else{
        this.authService.me().subscribe(me => {
          this.privilege = me['privilege'];
          this.loadData();
        })
      }
    })
  }

  loadData(){
    this.dataService.getGroup(this.id).subscribe(data => {
      this.group = data;
      console.log(data);
    });
  }

}
