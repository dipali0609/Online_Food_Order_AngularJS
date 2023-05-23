import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegChComponent } from './nonveg-ch.component';

describe('NonvegChComponent', () => {
  let component: NonvegChComponent;
  let fixture: ComponentFixture<NonvegChComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonvegChComponent]
    });
    fixture = TestBed.createComponent(NonvegChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
