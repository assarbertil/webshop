import { Component, OnInit } from "@angular/core";
import { SortedMovieCategory } from "src/app/interfaces/SortedMovies";
import { MoviesByCategoryService } from "src/app/services/movies-by-category/movies-by-category.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-grid.component.html",
})
export class MovieGridComponent implements OnInit {
  categories: SortedMovieCategory[] = [];

  constructor(private moviesByCategoryService: MoviesByCategoryService) {}

  ngOnInit(): void {
    this.moviesByCategoryService
      .getSortedMovies()
      .subscribe((categories) => (this.categories = categories));
  }
}
