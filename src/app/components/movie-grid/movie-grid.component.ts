import { Component, OnInit } from "@angular/core";
import { SortedMovieCategory } from "src/app/interfaces/SortedMovieCategory";
import { MoviesByCategoryService } from "src/app/services/movies-by-category.service";

@Component({
  selector: "app-movie-grid",
  templateUrl: "./movie-grid.component.html",
})
export class MovieGridComponent implements OnInit {
  categories: SortedMovieCategory[] = [];

  constructor(private moviesByCategoryService: MoviesByCategoryService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesByCategoryService
      .getSortedMovies()
      .subscribe((categories) => (this.categories = categories));
  }
}
