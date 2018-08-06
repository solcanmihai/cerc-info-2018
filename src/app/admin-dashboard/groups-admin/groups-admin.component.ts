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

  loadData(){
    this.dataService.getGroups().subscribe(data => {
      this.groups = data;
    })
  }

  ngOnInit() {
    this.loadData();
  }

  handleSubmit(){
    this.dataService.addGroup(this.name, this.description).subscribe(data => {
      //Reload data after post request is finished
      this.loadData();
    })
  }

  deleteGroup(id: number){
    this.dataService.deleteGroup(id).subscribe(data => {
      this.loadData();
    })
  }

}
