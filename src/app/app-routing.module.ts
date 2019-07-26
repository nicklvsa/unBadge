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
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/student', component: StudentComponent},
  {path: 'dashboard/teacher', component: TeacherComponent},
  {path: 'student', redirectTo: 'dashboard/student', pathMatch: 'full'},
  {path: 'teacher', redirectTo: 'dashboard/teacher', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
