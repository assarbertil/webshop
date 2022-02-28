import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMovie } from "../interfaces/IMovie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  readonly moviesUrl =
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }
}
