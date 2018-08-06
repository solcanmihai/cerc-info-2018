import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { WelcomeStudentComponent } from './welcome-student/welcome-student.component';

const routes: Routes = [
  {
    path: 'student-dashboard', 
    component: StudentDashboardComponent, 
    children: [
      {path: '', component: WelcomeStudentComponent}
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
  declarations: [WelcomeStudentComponent, StudentDashboardComponent]
})
export class StudentDashboardModule { }
