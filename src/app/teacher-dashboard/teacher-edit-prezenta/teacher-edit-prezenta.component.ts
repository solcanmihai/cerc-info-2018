import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-teacher-edit-prezenta',
  templateUrl: './teacher-edit-prezenta.component.html',
  styleUrls: ['./teacher-edit-prezenta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherEditPrezentaComponent implements OnInit {

  attendanceId: number;
  attendanceList;
  showList: boolean;

  searchText: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.showList = false;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.attendanceId = params['prezentaId'];
      this.loadData();
    })
  }

  loadData(){
    this.dataService.getAttendanceList(this.attendanceId).subscribe(data => {
      console.log(this.attendanceList);
      this.attendanceList = data;
      console.log('Data loaded');
      console.log(this.attendanceList);
      this.showList = true;

      //let l = this.attendanceList.length;

      //for(let i = 0; i < l; i++){
      //  this.attendanceList[i].pos = i;

      //  if(this.attendanceList[i].isPresent == 0){
      //    this.attendanceList[i].isPresent = false;
      //  }
      //  else{
      //    this.attendanceList[i].isPresent = true;
      //  }
      //}

      //console.log(this.attendanceList);
    })
  }

  toggleStudent(userId: number){
    this.dataService.toggleUserStatus(this.attendanceId, userId).subscribe(data => {
      let pos = this.attendanceList.findIndex(x => x.userId = userId);
      this.attendanceList[pos].isPresent = !this.attendanceList[pos].isPresent;
    })
  }
}
