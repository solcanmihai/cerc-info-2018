import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  name: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.name = data['name'];
    })
  }

}
