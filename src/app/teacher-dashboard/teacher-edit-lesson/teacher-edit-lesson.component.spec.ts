import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditLessonComponent } from './teacher-edit-lesson.component';

describe('TeacherEditLessonComponent', () => {
  let component: TeacherEditLessonComponent;
  let fixture: ComponentFixture<TeacherEditLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEditLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
