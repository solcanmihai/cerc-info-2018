import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { API } from 'src/app/classes/globals';

@Component({
  selector: 'app-homework-submit',
  templateUrl: './homework-submit.component.html',
  styleUrls: ['./homework-submit.component.css']
})
export class HomeworkSubmitComponent implements OnInit {

  homeworkId: number;
  homework;
  submitData: any;
  oldData;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.homeworkId = params['homeworkId'];

      this.dataService.getHomeworkById(this.homeworkId).subscribe(data => {
        console.log(data);

        this.homework = data;

        this.submitData = this.homework['tasks'];

        this.submitData.map(x => {
          x.fileName = 'Upload file...'
        })

        this.dataService.getSubmit(this.homeworkId).subscribe(oldData => {
          this.oldData = oldData;

          console.log(oldData);

          if(oldData){
            for(let x of this.submitData){
              for(let y of this.oldData){
                if(x.taskId == y.taskId){
                  if(y.link){
                    x.link = y.link;
                  }
                  else{
                    x.fileName = y.upload.fileName;
                    x.fileLink = API + y.upload.url;
                  }
                }
              }
            }
          }
          
        })
      })
    })
  }

  submitHomework(){
    this.dataService.submitHomeworkSubmit(this.homeworkId, this.submitData).subscribe(data => {
      this.router.navigateByUrl('/student-dashboard/homework/' + this.homeworkId);
    });
  }

  handleFileInput(file, task){
    task.file = file;
    task.fileName = file[0].name;
    console.log(this.submitData);
  }

}
