import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersInGroupComponent } from './edit-users-in-group.component';

describe('EditUsersInGroupComponent', () => {
  let component: EditUsersInGroupComponent;
  let fixture: ComponentFixture<EditUsersInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsersInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
