import { TestBed } from '@angular/core/testing';

import { DataStructService } from './data-struct.service';

describe('DataStructService', () => {
  let service: DataStructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
