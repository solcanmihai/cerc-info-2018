//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'welcome', component: LandingPageComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LandingPageComponent,
    LoginComponent
  ]
})
export class LandingModule { }
