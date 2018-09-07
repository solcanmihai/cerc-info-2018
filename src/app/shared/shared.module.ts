import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditUsersInGroupComponent } from './edit-users-in-group/edit-users-in-group.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [GroupDetailsComponent, FilterPipe, EditUsersInGroupComponent],
  exports: [
    GroupDetailsComponent,
    EditUsersInGroupComponent,
    FilterPipe
  ]
})
export class SharedModule { }
