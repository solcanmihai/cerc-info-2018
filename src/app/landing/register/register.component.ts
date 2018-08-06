import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  errorMessage: string;
  registerEmail: string;
  showError: boolean;
  token: string;

  ngOnInit() {
    this.registerEmail = '';
    this.showError = false;

    this.activatedRoute.params.subscribe(data => {
      this.token = data.token;
      this.dataService.validateRegisterToken(this.token).subscribe(datax => {
        console.log(datax);
        if(!datax['error']){

        }
        else{
          this.errorMessage = datax['error'];
          this.showError = true;
        }
      })
    })
  }

}
