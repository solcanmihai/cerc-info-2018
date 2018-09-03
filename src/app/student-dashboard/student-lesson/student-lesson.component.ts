import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-student-lesson',
  templateUrl: './student-lesson.component.html',
  styleUrls: ['./student-lesson.component.css']
})
export class StudentLessonComponent implements OnInit {

  lessonId;
  groupId;
  lesson;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];

      this.authService.me().subscribe(me => {
        this.groupId = me['groupId'];
        
        this.dataService.getLessonById(this.lessonId).subscribe(lesson => {
          this.lesson = lesson;
        })
      });
    });
  }
}
