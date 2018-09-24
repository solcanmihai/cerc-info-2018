import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGroupPrezentaComponent } from './teacher-group-prezenta.component';

describe('TeacherGroupPrezentaComponent', () => {
  let component: TeacherGroupPrezentaComponent;
  let fixture: ComponentFixture<TeacherGroupPrezentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGroupPrezentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGroupPrezentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
