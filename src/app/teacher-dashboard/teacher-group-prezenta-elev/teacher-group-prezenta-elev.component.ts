import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-teacher-group-prezenta-elev',
  templateUrl: './teacher-group-prezenta-elev.component.html',
  styleUrls: ['./teacher-group-prezenta-elev.component.css']
})
export class TeacherGroupPrezentaElevComponent implements OnInit {

  nume;
  prezenta;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getAttendanceForStudent(params['studentId']).subscribe(data => {
        this.prezenta = data['attendance'];
        this.nume = data['name'];
      })
    })
  }

}
