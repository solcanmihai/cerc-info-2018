import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSubmitsComponent } from './homework-submits.component';

describe('HomeworkSubmitsComponent', () => {
  let component: HomeworkSubmitsComponent;
  let fixture: ComponentFixture<HomeworkSubmitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSubmitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
