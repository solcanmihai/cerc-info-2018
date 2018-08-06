import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ViewChild, ElementRef} from '@angular/core';


class Details{
  email: string;
  password: string;

  constructor(){
    this.email = '';
    this.password = '';
  }
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  details: Details;
  errorMessage: string;

  @ViewChild('closeLoginModal') closeLoginModal: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.details = new Details();
  }

  handleSubmit(){ 
    this.authService.login(this.details).subscribe(data => {
      if(data == null){
        this.closeLoginModal.nativeElement.click();
        this.router.navigateByUrl('/redirect');
      }
      else{
        this.errorMessage = data;
      }
    });
  }

}
