//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { GroupsAdminComponent } from './groups-admin/groups-admin.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminInviteUserComponent } from './admin-invite-user/admin-invite-user.component';

//Modules
import { SharedModule } from '../shared/shared.module';
import { GroupDetailsComponent } from '../shared/group-details/group-details.component';

const routes: Routes = [
  {
    path: 'admin-dashboard', 
    component: AdminDashboardComponent, 
    children: [
      {path: '', component: WelcomeAdminComponent},
      {path: 'groups', component: GroupsAdminComponent},
      {path: 'teachers', component: AdminTeachersComponent},
      {path: 'students', component: AdminStudentsComponent},
      {path: 'invite', component: AdminInviteUserComponent},
      {path: 'group/:id', component: GroupDetailsComponent}
    ]
  }
];


@NgModule({
  imports: [
    //Angular
    CommonModule,
    RouterModule,
    FormsModule,

    //My modules
    SharedModule,

    //Routing
    RouterModule.forRoot(routes)
  ],
  declarations: [AdminDashboardComponent, WelcomeAdminComponent, GroupsAdminComponent, AdminTeachersComponent, AdminStudentsComponent, AdminInviteUserComponent]
})
export class AdminDashboardModule { }
