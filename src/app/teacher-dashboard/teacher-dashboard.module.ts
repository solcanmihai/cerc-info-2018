//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { WelcomeTeacherComponent } from './welcome-teacher/welcome-teacher.component';
import { TeacherLessonsComponent } from './teacher-lessons/teacher-lessons.component';
import { TeacherLessonComponent } from './teacher-lesson/teacher-lesson.component';
import { TeacherEditLessonComponent } from './teacher-edit-lesson/teacher-edit-lesson.component';
import { TeacherHomeworkComponent } from './teacher-homework/teacher-homework.component';
import { TeacherPrezentaComponent } from './teacher-prezenta/teacher-prezenta.component';

const routes: Routes = [
  {
    path: 'teacher-dashboard', 
    component: TeacherDashboardComponent, 
    children: [
      {path: '', component: WelcomeTeacherComponent},
      {path: 'lessons', component: TeacherLessonsComponent},
      {path: 'edit-lesson/:lessonId', component: TeacherEditLessonComponent},
      {path: 'prezenta', component: TeacherPrezentaComponent},
      {path: 'teme', component: TeacherHomeworkComponent}
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
    WelcomeTeacherComponent,
    TeacherLessonsComponent,
    TeacherLessonComponent,
    TeacherEditLessonComponent,
    TeacherHomeworkComponent,
    TeacherPrezentaComponent
  ]
})
export class TeacherDashboardModule { }
