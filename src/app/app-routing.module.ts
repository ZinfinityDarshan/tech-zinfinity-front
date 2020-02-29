import { AngularCourseComponent } from './components/angular-course/angular-course.component';
import { JavaSpringCourseComponent } from './components/java-spring-course/java-spring-course.component';
import { JavaCourseComponent } from './components/java-course/java-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/course/java', pathMatch:'full'},
  {path:'course', children:[
    {path:'', component:JavaCourseComponent},
    {path:'java', component:JavaCourseComponent},
    {path:'java-springboot', component:JavaSpringCourseComponent},
    {path:'angular', component:AngularCourseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
