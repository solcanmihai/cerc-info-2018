import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { WelcomeStudentComponent } from './welcome-student/welcome-student.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HomeworkComponent } from './homework/homework.component';

const routes: Routes = [
  {
    path: 'student-dashboard', 
    component: StudentDashboardComponent, 
    children: [
      {path: '', component: WelcomeStudentComponent},
      {path: 'lessons', component: LessonsComponent}
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
  declarations: [WelcomeStudentComponent, StudentDashboardComponent, LessonsComponent, HomeworkComponent]
})
export class StudentDashboardModule { }
