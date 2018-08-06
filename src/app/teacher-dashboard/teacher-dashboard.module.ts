//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { WelcomeTeacherComponent } from './welcome-teacher/welcome-teacher.component';

const routes: Routes = [
  {
    path: 'teacher-dashboard', 
    component: TeacherDashboardComponent, 
    children: [
      {path: '', component: WelcomeTeacherComponent}
    ]
  }
];


@NgModule({
  imports: [
     //Angular
     CommonModule,
     RouterModule,
     FormsModule,
 
     //Routing
     RouterModule.forRoot(routes)
  ],
  declarations: [
    TeacherDashboardComponent,
    WelcomeTeacherComponent
  ]
})
export class TeacherDashboardModule { }
