import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackdataComponent } from './feedbackdata.component';

describe('FeedbackdataComponent', () => {
  let component: FeedbackdataComponent;
  let fixture: ComponentFixture<FeedbackdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackdataComponent]
    });
    fixture = TestBed.createComponent(FeedbackdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
