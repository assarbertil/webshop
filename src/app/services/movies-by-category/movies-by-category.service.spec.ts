import { TestBed } from '@angular/core/testing';

import { MoviesByCategoryService } from './movies-by-category.service';

describe('MoviesByCategoryService', () => {
  let service: MoviesByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
