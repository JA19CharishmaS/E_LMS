import { TestBed } from '@angular/core/testing';

import { BorrowbooksService } from './borrowbooks.service';

describe('BorrowbooksService', () => {
  let service: BorrowbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
