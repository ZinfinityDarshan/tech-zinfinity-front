import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpringCourseComponent } from './java-spring-course.component';

describe('JavaSpringCourseComponent', () => {
  let component: JavaSpringCourseComponent;
  let fixture: ComponentFixture<JavaSpringCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaSpringCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSpringCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
