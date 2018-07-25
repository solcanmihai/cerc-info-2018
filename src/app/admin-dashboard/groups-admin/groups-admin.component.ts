import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-groups-admin',
  templateUrl: './groups-admin.component.html',
  styleUrls: ['./groups-admin.component.css']
})
export class GroupsAdminComponent implements OnInit {

  groups;
  name: string;
  description: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getGroups().subscribe(data => {
      this.groups = data;
    })
  }

  handleSubmit(){
    this.dataService.addGroup(this.name, this.description);
  }

}
