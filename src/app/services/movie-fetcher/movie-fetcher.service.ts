import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../../interfaces/Movie";

@Injectable({
  providedIn: "root",
})
export class MovieFetcherService {
  readonly moviesUrl =
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }
}
