import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyAttendanceComponent } from './student-my-attendance.component';

describe('StudentMyAttendanceComponent', () => {
  let component: StudentMyAttendanceComponent;
  let fixture: ComponentFixture<StudentMyAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMyAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
