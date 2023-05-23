import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegChComponent } from './veg-ch.component';

describe('VegChComponent', () => {
  let component: VegChComponent;
  let fixture: ComponentFixture<VegChComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegChComponent]
    });
    fixture = TestBed.createComponent(VegChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
