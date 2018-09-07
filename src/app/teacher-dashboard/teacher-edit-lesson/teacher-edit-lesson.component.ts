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

  files: FileList[];
  oldFiles;

  newTag;
  tags;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.lesson = new Object();
    this.tags = [];
    this.files = [];

    this.route.params.subscribe(params => {
      this.lessonId = params['lessonId'];

      if(this.lessonId != 0){
        this.pageTitle = "Modifica lectie"
        this.dataService.getLessonById(this.lessonId).subscribe(lesson => {
          console.log(lesson);
          this.lesson = lesson;
          this.tags = this.lesson.tags;

          this.oldFiles = this.lesson.uploads;
        })
      }
      else{
        this.pageTitle = "Adauga o lectie noua";
      }
    });
  }

  onFileChange(event){
    let filesx = event.target.files;
    for(let item of filesx){
      this.files.push(item);
    }
  }

  removeNewFile(file){
    this.files = this.files.filter(x => x != file)
  }

  removeOldFile(file){
    this.oldFiles = this.oldFiles.filter(x => x != file)
  }

  deleteTag(name){
    this.tags = this.tags.filter(x => {
      return x != name;
    })
  }

  addTag(){
    if(this.newTag == ''){
      return;
    }

    let res = this.tags.find((x) => {
      return x == this.newTag;
    })

    if(res !== undefined){
      this.newTag = '';
      return;
    }

    this.tags.push(this.newTag);
    this.newTag = '';
  }

  submitLesson(){
    this.lesson.tags = this.tags;
    if(this.lessonId == 0){
      this.authService.me().subscribe(me => {
        this.lesson['authorId'] = me['userId'];
        this.dataService.addLesson(me['groupId'], this.lesson, this.files).subscribe(data => {
          this.router.navigateByUrl('/teacher-dashboard/lessons');
        })
      });
    }
    else{
      this.dataService.editLesson(this.lessonId, this.lesson, this.files, this.oldFiles).subscribe(data => {
        this.router.navigateByUrl('/teacher-dashboard/lesson/' + this.lessonId);
      })
    }

    
  }

}
