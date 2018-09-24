import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { AuthService } from '../../auth.service';
import { API } from 'src/app/classes/globals';

@Component({
  selector: 'app-teacher-group-prezenta',
  templateUrl: './teacher-group-prezenta.component.html',
  styleUrls: ['./teacher-group-prezenta.component.css']
})
export class TeacherGroupPrezentaComponent implements OnInit {

  me;
  elevi;
  API;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) { }

  downloadFile(){
    this.dataService.getAttendanceSheet().subscribe(data => this.downloadIt(data));
  }

  downloadIt(file){
    console.log(file);

    const filename = file.headers.get('filename');
    var blob = new Blob([file.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const objectUrl: string = URL.createObjectURL(blob);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();        

    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);

    // var url= window.URL.createObjectURL(blob);
    // window.open(url);
  }

  ngOnInit() {
    this.API = API;

    this.authService.me().subscribe(me => {
      this.me = me;

      this.dataService.getUsersWithAttendance().subscribe(data => {
        this.elevi = data;
      });
    })
  }

}
