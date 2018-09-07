import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [GroupDetailsComponent, FilterPipe],
  exports: [
    GroupDetailsComponent,
    FilterPipe
  ]
})
export class SharedModule { }
