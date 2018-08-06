import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTeacherComponent } from './welcome-teacher.component';

describe('WelcomeTeacherComponent', () => {
  let component: WelcomeTeacherComponent;
  let fixture: ComponentFixture<WelcomeTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
