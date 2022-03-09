import { Injectable } from "@angular/core";

import { MovieFetcherService } from "src/app/services/movie-fetcher.service";
import { CategoryFetcherService } from "src/app/services/category-fetcher.service";

import { MovieCategory } from "src/app/interfaces/MovieCategory";
import { Movie } from "src/app/interfaces/Movie";

import { forkJoin, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesByCategoryService {
  constructor(
    private movieFetcherService: MovieFetcherService,
    private categoryFetcherService: CategoryFetcherService
  ) {}

  // Returns processed array of sorted movies as observable
  getSortedMovies() {
    return this.fetchData().pipe(
      map((data) => this.sortMoviesByCategory(data[0], data[1]))
    );
  }

  // Fetches both data sets and returns observable of when both are fetched
  private fetchData() {
    const categoriesData = this.categoryFetcherService.getCategories();
    const moviesData = this.movieFetcherService.getMovies();

    return forkJoin([categoriesData, moviesData]);
  }

  // Sorts movies by category
  private sortMoviesByCategory(categories: MovieCategory[], movies: Movie[]) {
    // Map all recieved categories to a new array
    return categories.map((category) => ({
      // Make a new object for each category with name and movie array to be filled
      name: category.name,
      // Iterate over all movies for each category and see if at least one category id matches current category
      movies: movies.filter((movie) =>
        // If at least one category id matches, include it in our new category array
        movie.productCategory.some(
          (prodCat) => prodCat.categoryId === category.id
        )
      ),
    }));
  }
}
