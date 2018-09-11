import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditHomeworkComponent } from './teacher-edit-homework.component';

describe('TeacherEditHomeworkComponent', () => {
  let component: TeacherEditHomeworkComponent;
  let fixture: ComponentFixture<TeacherEditHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEditHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
