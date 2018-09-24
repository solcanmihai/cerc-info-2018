import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGroupPrezentaElevComponent } from './teacher-group-prezenta-elev.component';

describe('TeacherGroupPrezentaElevComponent', () => {
  let component: TeacherGroupPrezentaElevComponent;
  let fixture: ComponentFixture<TeacherGroupPrezentaElevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGroupPrezentaElevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGroupPrezentaElevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
