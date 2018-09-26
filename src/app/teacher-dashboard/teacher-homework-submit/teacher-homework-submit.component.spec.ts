import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHomeworkSubmitComponent } from './teacher-homework-submit.component';

describe('TeacherHomeworkSubmitComponent', () => {
  let component: TeacherHomeworkSubmitComponent;
  let fixture: ComponentFixture<TeacherHomeworkSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHomeworkSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHomeworkSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
