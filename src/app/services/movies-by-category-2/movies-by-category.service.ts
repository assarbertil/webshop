import { Injectable } from "@angular/core";

import { MovieFetcherService } from "src/app/services/movie-fetcher/movie-fetcher.service";
import { CategoryFetcherService } from "src/app/services/category-fetcher/category-fetcher.service";

import { MovieCategory } from "src/app/interfaces/MovieCategory";
import { Movie } from "src/app/interfaces/Movie";
import { SortedMovieCategory } from "src/app/interfaces/SortedMovies";

import { forkJoin, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesByCategoryService {
  movies: Movie[] = [];
  categories: MovieCategory[] = [];
  sortedMovies: any = [];

  constructor(
    private movieFetcherService: MovieFetcherService,
    private categoryFetcherService: CategoryFetcherService
  ) {}

  getSortedMovies() {
    const moviesData = this.movieFetcherService.getMovies();
    const categoriesData = this.categoryFetcherService.getCategories();

    moviesData.subscribe((movies) => (this.movies = movies));
    categoriesData.subscribe((categories) => (this.categories = categories));

    forkJoin([moviesData, categoriesData]).subscribe(() =>
      this.sortMoviesByCategory()
    );
  }

  private sortMoviesByCategory() {
    // Map all recieved categories to a new array

    this.sortedMovies = of(
      this.categories.map((category) => ({
        // Make a new object for each category with name and movie array to be filled
        name: category.name,
        // Iterate over all movies for each category and see if at least one category id matches current category
        movies: this.movies.filter((movie) =>
          // If at least one category id matches, include it in our new category array
          movie.productCategory.some(
            (prodCat) => prodCat.categoryId === category.id
          )
        ),
      }))
    );

    this.sortedMovies.subscribe((data: any) => console.log(data));
  }
}
