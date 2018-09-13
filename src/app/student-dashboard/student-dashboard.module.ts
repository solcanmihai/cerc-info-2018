import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { WelcomeStudentComponent } from './welcome-student/welcome-student.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HomeworkComponent } from './homework/homework.component';
import { StudentLessonComponent } from './student-lesson/student-lesson.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkSubmitComponent } from './homework-submit/homework-submit.component';
import { StudentRecomendedLessonsComponent } from './student-recomended-lessons/student-recomended-lessons.component';
import { GroupDetailsComponent } from '../shared/group-details/group-details.component';
import { StudentMyAttendanceComponent } from './student-my-attendance/student-my-attendance.component';

const routes: Routes = [
  {
    path: 'student-dashboard', 
    component: StudentDashboardComponent, 
    children: [
      {path: '', component: WelcomeStudentComponent},
      {path: 'lessons', component: LessonsComponent},
      {path: 'lesson/:lessonId', component: StudentLessonComponent},
      {path: 'homework-list', component: HomeworkListComponent},
      {path: 'homework/:homeworkId', component: HomeworkComponent},
      {path: 'homework-submit/:homeworkId', component: HomeworkSubmitComponent},
      {path: 'lectii-recomandate', component: StudentRecomendedLessonsComponent},
      {path: 'grupul-meu', component: GroupDetailsComponent},
      {path: 'prezenta-mea', component: StudentMyAttendanceComponent}
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
  declarations: [WelcomeStudentComponent, StudentDashboardComponent, LessonsComponent, HomeworkComponent, StudentLessonComponent, HomeworkListComponent, HomeworkSubmitComponent, StudentRecomendedLessonsComponent, StudentMyAttendanceComponent]
})
export class StudentDashboardModule { }
