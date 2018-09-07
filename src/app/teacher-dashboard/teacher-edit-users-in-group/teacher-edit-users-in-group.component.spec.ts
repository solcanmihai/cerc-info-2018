import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditUsersInGroupComponent } from './teacher-edit-users-in-group.component';

describe('TeacherEditUsersInGroupComponent', () => {
  let component: TeacherEditUsersInGroupComponent;
  let fixture: ComponentFixture<TeacherEditUsersInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEditUsersInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditUsersInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
