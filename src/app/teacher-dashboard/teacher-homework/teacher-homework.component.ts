import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-teacher-homework',
  templateUrl: './teacher-homework.component.html',
  styleUrls: ['./teacher-homework.component.css']
})
export class TeacherHomeworkComponent implements OnInit {

  homeworkId: number;
  pageTitle: string;

  homework: Object;

  newTag;
  tags;

  tasks;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.homework = new Object();
    this.tags = [];
    this.tasks = [];
    
    this.route.params.subscribe(params => {
      this.homeworkId = params['homeworkId'];
      
      if(this.homeworkId == 0){
        this.pageTitle = 'Adauga o tema noua';
      }
      else if(this.homeworkId > 0){
        this.pageTitle = 'Modifica o tema existenta';

        this.dataService.getHomeworkById(this.homeworkId).subscribe(data => {
          this.homework = data;
          this.tasks = this.homework['tasks'];
          this.tags = this.homework['tags'];
        })
      }
    })
  }

  submitHomework(){
    this.homework['tags'] = this.tags;
    this.homework['tasks'] = this.tasks;

    if(this.homeworkId > 0){
      this.dataService.putHomework(this.homework, this.homeworkId).subscribe(data => {
        this.router.navigateByUrl('/teacher-dashboard');
      })
    }
    else{
      this.dataService.submitHomework(this.homework).subscribe(data => {
        this.router.navigateByUrl('/teacher-dashboard');
      })
    }
  }

  newTask(){
    this.tasks.push({content: '', type: 0});
  }

  removeTask(task){
    this.tasks = this.tasks.filter(x => x != task)
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

}
