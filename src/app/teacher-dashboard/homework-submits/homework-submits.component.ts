import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-homework-submits',
  templateUrl: './homework-submits.component.html',
  styleUrls: ['./homework-submits.component.css']
})
export class HomeworkSubmitsComponent implements OnInit {

  homeworkId;
  submits;
  homeworkName;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.homeworkId = params['homeworkId'];

      this.dataService.getSubmits(this.homeworkId).subscribe(data => {
        this.submits = data['submits'];
        this.homeworkName = data['homeworkTitle']
        console.log(data);
      })
    })
  }

}
