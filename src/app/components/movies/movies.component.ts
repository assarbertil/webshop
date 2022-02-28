import { Component, OnInit } from "@angular/core";
import { IMovie } from "src/app/interfaces/IMovie";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
