import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInviteUserComponent } from './admin-invite-user.component';

describe('AdminInviteUserComponent', () => {
  let component: AdminInviteUserComponent;
  let fixture: ComponentFixture<AdminInviteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInviteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInviteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
