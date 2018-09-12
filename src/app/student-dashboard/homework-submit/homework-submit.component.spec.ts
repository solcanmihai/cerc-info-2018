import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSubmitComponent } from './homework-submit.component';

describe('HomeworkSubmitComponent', () => {
  let component: HomeworkSubmitComponent;
  let fixture: ComponentFixture<HomeworkSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
