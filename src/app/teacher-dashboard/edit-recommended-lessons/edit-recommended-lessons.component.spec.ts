import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecommendedLessonsComponent } from './edit-recommended-lessons.component';

describe('EditRecommendedLessonsComponent', () => {
  let component: EditRecommendedLessonsComponent;
  let fixture: ComponentFixture<EditRecommendedLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecommendedLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecommendedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
