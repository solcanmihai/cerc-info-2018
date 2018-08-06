import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  groupId: number;
  lessons;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.groupId = me['groupId'];

      console.log(me);

      this.dataService.getLessons(this.groupId).subscribe(lessons => {
        this.lessons = lessons;
      })
    })
  }

}
