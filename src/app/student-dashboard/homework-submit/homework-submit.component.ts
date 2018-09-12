import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-homework-submit',
  templateUrl: './homework-submit.component.html',
  styleUrls: ['./homework-submit.component.css']
})
export class HomeworkSubmitComponent implements OnInit {

  homeworkId: number;
  homework;
  submitData: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.homeworkId = params['homeworkId'];

      this.dataService.getHomeworkById(this.homeworkId).subscribe(data => {
        this.homework = data;

        this.submitData = this.homework['tasks'];

        this.submitData.map(x => {
          x.fileName = 'Upload file...'
        })

        console.log(this.submitData);
      })
    })
  }

  submitHomework(){
    this.dataService.submitHomeworkSubmit(this.homeworkId, this.submitData).subscribe(data => {
      console.log('done');
    });
    // console.log(this.submitData);
  }

  handleFileInput(file, task){
    task.file = file;
    task.fileName = file[0].name;
  }

}
