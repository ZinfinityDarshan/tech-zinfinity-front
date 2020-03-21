import { AngularCourseComponent } from './components/angular-course/angular-course.component';
import { JavaSpringCourseComponent } from './components/java-spring-course/java-spring-course.component';
import { JavaCourseComponent } from './components/java-course/java-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './components/faculty/faculty.component';
import { BatchesComponent } from './components/batches/batches.component';
import { SocialComponent } from './components/social/social.component';

const routes: Routes = [
  {path:'', redirectTo: '/course/java', pathMatch:'full'},
  {path:'course', children:[
    {path:'', component:JavaCourseComponent},
    {path:'java', component:JavaCourseComponent},
    {path:'java-springboot', component:JavaSpringCourseComponent},
    {path:'angular', component:AngularCourseComponent}
  ]},
  {path:'faculty', component:FacultyComponent},
  {path:'batches', component:BatchesComponent},
  {path:'socail', component:SocialComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
