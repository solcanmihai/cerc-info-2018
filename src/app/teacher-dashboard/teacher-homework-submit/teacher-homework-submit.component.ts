import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { API } from 'src/app/classes/globals';

@Component({
  selector: 'app-teacher-homework-submit',
  templateUrl: './teacher-homework-submit.component.html',
  styleUrls: ['./teacher-homework-submit.component.css']
})
export class TeacherHomeworkSubmitComponent implements OnInit {

  submitId;
  submit;
  api;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.api = API;

    this.route.params.subscribe(params => {
      this.submitId = params['submitId'];

      this.dataService.getSubmitForTeacher(this.submitId).subscribe(data => {
        this.submit = data;
        console.log(data);
      })
    })
  }

}
