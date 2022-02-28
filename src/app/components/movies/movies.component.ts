import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";
import { MovieFetcherService } from "src/app/services/movie-fetcher/movie-fetcher.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public movieFetcherService: MovieFetcherService) {}

  ngOnInit(): void {
    this.movieFetcherService
      .getMovies()
      .subscribe((movies) => (this.movies = movies));
  }
}
