import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { EnquireComponent } from './modal/enquire/enquire.component';
import { JavaCourseComponent } from './components/java-course/java-course.component';
import { AngularCourseComponent } from './components/angular-course/angular-course.component';
import { JavaSpringCourseComponent } from './components/java-spring-course/java-spring-course.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { BatchesComponent } from './components/batches/batches.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquireComponent,
    JavaCourseComponent,
    AngularCourseComponent,
    JavaSpringCourseComponent,
    FacultyComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
