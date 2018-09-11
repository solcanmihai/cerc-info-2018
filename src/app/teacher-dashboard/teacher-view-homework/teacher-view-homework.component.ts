import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view-homework',
  templateUrl: './teacher-view-homework.component.html',
  styleUrls: ['./teacher-view-homework.component.css']
})
export class TeacherViewHomeworkComponent implements OnInit {

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

  deleteHomework(){
    this.dataService.deleteHomework(this.homeworkId).subscribe(data => {
      this.router.navigateByUrl('/teacher-dashboard/teme');
    })
  }

}
