import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";
import { SortedMovieCategory } from "src/app/interfaces/SortedMovies";
import { MoviesByCategoryService } from "src/app/services/movies-by-category/movies-by-category.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
})
export class MoviesComponent implements OnInit {
  categories: SortedMovieCategory[] = [];

  constructor(private moviesByCategoryService: MoviesByCategoryService) {}

  ngOnInit(): void {
    this.moviesByCategoryService
      .getSortedMovies()
      .subscribe((categories) => (this.categories = categories));
  }
}
