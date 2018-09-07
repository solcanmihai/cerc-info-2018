import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-teacher-edit-prezenta',
  templateUrl: './teacher-edit-prezenta.component.html',
  styleUrls: ['./teacher-edit-prezenta.component.css']
})
export class TeacherEditPrezentaComponent implements OnInit {

  attendanceId: number;
  attendanceList: any;


  searchText: string;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService 
  ) {
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.attendanceId = params['prezentaId'];
      this.loadData();
    })
  }


  loadData(){
    // this.attendanceList = [
    //   {userId: 0, isPresent: 0, name: "Mihai"},
    //   {userId: 1, isPresent: 0, name: "Popescu"},
    //   {userId: 2, isPresent: 1, name: "Andrei"},
    // ]

    this.dataService.getAttendanceList(this.attendanceId).subscribe((data) => {
      this.attendanceList = data;
      console.log(data);
    });
  }

  toggleStudent(student){
    let pos = this.attendanceList.findIndex(x => x.userId == student.userId);
    console.log(pos);
    this.attendanceList[pos].isPresent = !this.attendanceList[pos].isPresent;
    this.dataService.toggleUserStatus(this.attendanceId, student.userId).subscribe(data => {
      //Nu am nimic de facut aici
    })
  }
}
