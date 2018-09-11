import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditUsersInGroupComponent } from './edit-users-in-group/edit-users-in-group.component';
import { FilterxPipe } from './pipes/filterx.pipe';
import { TeacherEditHomeworkComponent } from './pipes/teacher-edit-homework/teacher-edit-homework.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [GroupDetailsComponent, FilterPipe, EditUsersInGroupComponent, FilterxPipe, TeacherEditHomeworkComponent],
  exports: [
    GroupDetailsComponent,
    EditUsersInGroupComponent,
    FilterPipe,
    FilterxPipe
  ]
})
export class SharedModule { }
