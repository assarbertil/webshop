import { Component } from "@angular/core";
import { MovieFetcherService } from "./services/movie-fetcher/movie-fetcher.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(movies: MovieFetcherService) {
    movies.getMovies();
  }
}
