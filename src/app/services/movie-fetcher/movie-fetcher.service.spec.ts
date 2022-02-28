import { TestBed } from "@angular/core/testing";

import { MovieFetcherService } from "./movie-fetcher.service";

describe("MovieService", () => {
  let service: MovieFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFetcherService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
