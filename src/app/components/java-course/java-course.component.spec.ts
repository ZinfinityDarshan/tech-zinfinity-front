import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCourseComponent } from './java-course.component';

describe('JavaCourseComponent', () => {
  let component: JavaCourseComponent;
  let fixture: ComponentFixture<JavaCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
