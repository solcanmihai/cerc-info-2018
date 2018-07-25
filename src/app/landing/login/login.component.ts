import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

class Details{
  email: string;
  password: string;

  constructor(){
    this.email = '';
    this.password = '';
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  details: Details;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.details = new Details();
  }

  handleSubmit(value){
    this.authService.login(value).subscribe(data => {
      if(data == null){
        this.router.navigateByUrl('/redirect');
      }
      else{
        this.errorMessage = data;
      }
    });
  }

}
