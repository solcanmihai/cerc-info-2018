import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {

  homeworkList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getHomeworkList().subscribe(data => {
      this.homeworkList = data;
    })
  }

}
