import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-edit-lesson',
  templateUrl: './teacher-edit-lesson.component.html',
  styleUrls: ['./teacher-edit-lesson.component.css']
})
export class TeacherEditLessonComponent implements OnInit {

  lesson;
  lessonId;
  groupId;
  pageTitle;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.lesson = new Object();

    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];

      if(this.lessonId != 0){
        this.pageTitle = "Modifica lectie"
        this.authService.me().subscribe(me => {
          this.groupId = me['groupId'];

          this.dataService.getLessonById(this.lessonId).subscribe(lesson => {
            this.lesson = lesson;
          })
        })
      }
      else{
        this.pageTitle = "Adauga o lectie noua";
      }
    });
  }

  submitLesson(){
    if(this.lessonId == 0){
      this.authService.me().subscribe(me => {
        this.lesson['authorId'] = me['userId'];
        this.dataService.addLesson(me['groupId'], this.lesson).subscribe(data => {
          this.router.navigateByUrl('/teacher-dashboard/lessons');
        })
      });
    }
    else{
      this.dataService.editLesson(this.lessonId, this.lesson).subscribe(data => {
        this.router.navigateByUrl('/teacher-dashboard/lesson/' + this.lessonId);
      })
    }

    
  }

}
