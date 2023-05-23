import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusdataComponent } from './contactusdata.component';

describe('ContactusdataComponent', () => {
  let component: ContactusdataComponent;
  let fixture: ComponentFixture<ContactusdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactusdataComponent]
    });
    fixture = TestBed.createComponent(ContactusdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
