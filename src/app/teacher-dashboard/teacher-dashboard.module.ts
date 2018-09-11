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
import { TeacherEditPrezentaComponent } from './teacher-edit-prezenta/teacher-edit-prezenta.component';
import { SharedModule } from '../shared/shared.module';
import { GroupDetailsComponent } from '../shared/group-details/group-details.component';
import { TeacherEditUsersInGroupComponent } from './teacher-edit-users-in-group/teacher-edit-users-in-group.component';
import { EditUsersInGroupComponent } from 'src/app/shared/edit-users-in-group/edit-users-in-group.component';
import { EditRecommendedLessonsComponent } from './edit-recommended-lessons/edit-recommended-lessons.component';
import { TeacherHomeworkListComponent } from './teacher-homework-list/teacher-homework-list.component';
import { TeacherViewHomeworkComponent } from './teacher-view-homework/teacher-view-homework.component';

const routes: Routes = [
  {
    path: 'teacher-dashboard', 
    component: TeacherDashboardComponent, 
    children: [
      {path: '', component: WelcomeTeacherComponent},
      {path: 'lessons', component: TeacherLessonsComponent},
      {path: 'lesson/:lessonId', component: TeacherLessonComponent},
      {path: 'edit-lesson/:lessonId', component: TeacherEditLessonComponent},
      {path: 'prezenta', component: TeacherPrezentaComponent},
      {path: 'prezenta/:prezentaId', component: TeacherEditPrezentaComponent},
      {path: 'teme', component: TeacherHomeworkListComponent},
      {path: 'my-group', component: GroupDetailsComponent},
      {path: 'edit-group-users', component: EditUsersInGroupComponent},
      {path: 'edit-recommended-lessons', component: EditRecommendedLessonsComponent},
      {path: 'edit-homework/:homeworkId', component: TeacherHomeworkComponent},
      {path: 'homework/:homeworkId', component: TeacherViewHomeworkComponent}
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
     RouterModule.forRoot(routes),

     //My modules
     SharedModule,


  ],
  declarations: [
    TeacherDashboardComponent,
    WelcomeTeacherComponent,
    TeacherLessonsComponent,
    TeacherLessonComponent,
    TeacherEditLessonComponent,
    TeacherHomeworkComponent,
    TeacherPrezentaComponent,
    TeacherEditPrezentaComponent,
    TeacherEditUsersInGroupComponent,
    EditRecommendedLessonsComponent,
    TeacherHomeworkListComponent,
    TeacherViewHomeworkComponent
  ]
})
export class TeacherDashboardModule { }
