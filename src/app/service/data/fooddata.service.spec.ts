import { TestBed } from '@angular/core/testing';

import { FooddataService } from './fooddata.service';

describe('FooddataService', () => {
  let service: FooddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
