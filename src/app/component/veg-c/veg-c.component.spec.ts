import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegCComponent } from './veg-c.component';

describe('VegCComponent', () => {
  let component: VegCComponent;
  let fixture: ComponentFixture<VegCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegCComponent]
    });
    fixture = TestBed.createComponent(VegCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
