import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarttableComponent } from './mycarttable.component';

describe('MycarttableComponent', () => {
  let component: MycarttableComponent;
  let fixture: ComponentFixture<MycarttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycarttableComponent]
    });
    fixture = TestBed.createComponent(MycarttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
