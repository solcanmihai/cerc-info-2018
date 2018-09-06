import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupDetailsComponent, FilterPipe],
  exports: [
    GroupDetailsComponent,
    FilterPipe
  ]
})
export class SharedModule { }
