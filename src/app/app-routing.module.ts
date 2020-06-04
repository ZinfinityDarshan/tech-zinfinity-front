import { AngularCourseComponent } from './components/angular-course/angular-course.component';
import { JavaSpringCourseComponent } from './components/java-spring-course/java-spring-course.component';
import { JavaCourseComponent } from './components/java-course/java-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './components/faculty/faculty.component';
import { BatchesComponent } from './components/batches/batches.component';
import { SocialComponent } from './components/social/social.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursePageComponent } from './components/course-page/course-page.component';

const routes: Routes = [
  {path:'courses', redirectTo: '/course/java', pathMatch:'full'},
  {path:'course', children:[
    {path:'', component:JavaCourseComponent},
    {path:'java', component:JavaCourseComponent},
    {path:'java-springboot', component:JavaSpringCourseComponent},
    {path:'angular', component:AngularCourseComponent}
  ]},
  {path:'faculty', component:FacultyComponent},
  {path:'batches', component:BatchesComponent},
  {path:'socail', component:SocialComponent},
  {path:'gallary', component:GallaryComponent},
  {path:'footer', component:FooterComponent},
  {path:'', component:HomepageComponent},
  {path:'course_page', component:CoursePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
