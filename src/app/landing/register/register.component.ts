import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

class FormData{
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  errorMessage: string;
  registerEmail: string;
  showError: boolean;
  token: string;
  formData: FormData;

  passwordError: boolean;

  ngOnInit() {
    this.registerEmail = '';
    this.errorMessage = '';
    this.showError = false;
    this.formData = new FormData();

    this.passwordError = false;

    this.activatedRoute.params.subscribe(data => {
      this.token = data.token;
      this.dataService.validateRegisterToken(this.token).subscribe(datax => {
        if(!datax['error']){
          this.formData.email = datax['email'];
        }
        else{
          this.errorMessage = datax['error'];
          this.showError = true;
        }
      })
    })
  }

  matchPasswords(){
    if(this.formData.password && this.formData.confirmPassword && this.formData.password != this.formData.confirmPassword){
      this.passwordError = true;
    }
    else{
      this.passwordError = false;
    }
  }

  handleSubmit(){
    if(this.passwordError == true){
      return;
    }

    this.dataService.register(this.formData.name, this.formData.password, this.token).subscribe(data => {
      this.router.navigateByUrl('/redirect');
    })
  }

}
