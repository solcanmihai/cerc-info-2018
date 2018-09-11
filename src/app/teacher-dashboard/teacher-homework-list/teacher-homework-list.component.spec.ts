import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHomeworkListComponent } from './teacher-homework-list.component';

describe('TeacherHomeworkListComponent', () => {
  let component: TeacherHomeworkListComponent;
  let fixture: ComponentFixture<TeacherHomeworkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHomeworkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHomeworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
