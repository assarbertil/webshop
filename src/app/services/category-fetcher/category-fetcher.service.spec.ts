import { TestBed } from '@angular/core/testing';

import { CategoryFetcherService } from './category-fetcher.service';

describe('CategoryFetcherService', () => {
  let service: CategoryFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
