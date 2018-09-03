import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-lesson',
  templateUrl: './teacher-lesson.component.html',
  styleUrls: ['./teacher-lesson.component.css']
})
export class TeacherLessonComponent implements OnInit {

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

  deleteLesson(){
    this.dataService.deleteLessonById(this.groupId).subscribe(data => {
      this.router.navigateByUrl('/teacher-dashboard/lessons');
    })
  }

}
