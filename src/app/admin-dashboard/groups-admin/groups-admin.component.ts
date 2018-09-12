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
  startDate: string;
  endDate: string;

  showError;

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
    if(this.showError == true){
      return;
    }

    this.dataService.addGroup(this.name, this.description, this.startDate, this.endDate).subscribe(data => {
      //Reload data after post request is finished
      this.loadData();
    })
  }

  validateDates(){
    if(this.startDate && this.startDate >= this.endDate){
      this.showError = true;
    }
    else{
      this.showError = false;
    }
  }

  deleteGroup(id: number){
    this.dataService.deleteGroup(id).subscribe(data => {
      this.loadData();
    })
  }

}
