import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  privileges: number;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());
    if(this.authService.isLoggedIn() == false){
      this.router.navigateByUrl('/welcome');
    }

    this.authService.me().subscribe(data => {
      console.log(data);
      this.privileges = data['privilege'];

      if(this.privileges == 2){
        this.router.navigateByUrl('/admin-dashboard');
      }
      else if(this.privileges == 1){
        this.router.navigateByUrl('/teacher-dashboard')
      }
      else if(this.privileges == 0){
        this.router.navigateByUrl('/student-dashboard');
      }
    })
  }

}
