import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { StudentComponent } from './dashboard/student/student.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'dashboard/:user', component: DashboardComponent, children: [
    {path: '', redirectTo: 'dashboard/student', pathMatch: 'full'},
    {path: 'student', component: StudentComponent},
    {path: 'teacher', component: TeacherComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
