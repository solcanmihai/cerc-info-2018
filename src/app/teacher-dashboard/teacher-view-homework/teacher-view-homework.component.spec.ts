import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewHomeworkComponent } from './teacher-view-homework.component';

describe('TeacherViewHomeworkComponent', () => {
  let component: TeacherViewHomeworkComponent;
  let fixture: ComponentFixture<TeacherViewHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
