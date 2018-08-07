import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit-lesson',
  templateUrl: './teacher-edit-lesson.component.html',
  styleUrls: ['./teacher-edit-lesson.component.css']
})
export class TeacherEditLessonComponent implements OnInit {

  lesson;
  lessonId;
  pageTitle;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];

      if(this.lessonId != 0){
        
      }
      else{
        this.pageTitle = "Adauga o lectie noua"
      }
    })
  }

}
