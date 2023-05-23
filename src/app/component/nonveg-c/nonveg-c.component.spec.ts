import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegCComponent } from './nonveg-c.component';

describe('NonvegCComponent', () => {
  let component: NonvegCComponent;
  let fixture: ComponentFixture<NonvegCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonvegCComponent]
    });
    fixture = TestBed.createComponent(NonvegCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
