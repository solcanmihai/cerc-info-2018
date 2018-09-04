import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditPrezentaComponent } from './teacher-edit-prezenta.component';

describe('TeacherEditPrezentaComponent', () => {
  let component: TeacherEditPrezentaComponent;
  let fixture: ComponentFixture<TeacherEditPrezentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEditPrezentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditPrezentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
