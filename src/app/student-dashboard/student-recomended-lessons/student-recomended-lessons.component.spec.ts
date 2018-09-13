import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecomendedLessonsComponent } from './student-recomended-lessons.component';

describe('StudentRecomendedLessonsComponent', () => {
  let component: StudentRecomendedLessonsComponent;
  let fixture: ComponentFixture<StudentRecomendedLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecomendedLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecomendedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
