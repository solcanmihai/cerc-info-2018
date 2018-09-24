import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AuthService } from "../../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  homeworkId: number;
  homework;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.homeworkId = params['homeworkId'];

      this.dataService.getHomeworkById(this.homeworkId).subscribe(data => {
        this.homework = data;
        console.log(data);
      })
    });
  }

}
