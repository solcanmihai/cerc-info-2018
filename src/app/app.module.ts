//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RedirectComponent } from './redirect/redirect.component';

//Modules
import { LandingModule } from './landing/landing.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { StudentDashboardModule } from 'src/app/student-dashboard/student-dashboard.module';

//Services
import { AuthService } from './auth.service';
import { DataService } from './data.service';

const routes: Routes = [
  {path: '', component: RedirectComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RedirectComponent
  ],
  imports: [
    //Angular
    BrowserModule,
    FormsModule,
    HttpClientModule,

    //My modules
    AdminDashboardModule,
    TeacherDashboardModule,
    StudentDashboardModule,
    LandingModule,

    //Routing
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    DataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
