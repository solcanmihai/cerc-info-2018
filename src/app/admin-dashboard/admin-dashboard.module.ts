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

const routes: Routes = [
  {
    path: 'admin-dashboard', 
    component: AdminDashboardComponent, 
    children: [
      {path: '', component: WelcomeAdminComponent},
      {path: 'groups', component: GroupsAdminComponent},
      {path: 'teachers', component: AdminTeachersComponent},
      {path: 'students', component: AdminStudentsComponent},
      {path: 'invite', component: AdminInviteUserComponent}
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
  declarations: [AdminDashboardComponent, WelcomeAdminComponent, GroupsAdminComponent, AdminTeachersComponent, AdminStudentsComponent, AdminInviteUserComponent]
})
export class AdminDashboardModule { }
