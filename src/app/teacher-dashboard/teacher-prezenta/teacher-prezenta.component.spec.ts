import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPrezentaComponent } from './teacher-prezenta.component';

describe('TeacherPrezentaComponent', () => {
  let component: TeacherPrezentaComponent;
  let fixture: ComponentFixture<TeacherPrezentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPrezentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPrezentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
