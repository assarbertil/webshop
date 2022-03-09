import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieCategory } from "../interfaces/MovieCategory";

@Injectable({
  providedIn: "root",
})
export class CategoryFetcherService {
  readonly categoriesUrl =
    "https://medieinstitutet-wie-products.azurewebsites.net/api/categories";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<MovieCategory[]> {
    return this.http.get<MovieCategory[]>(this.categoriesUrl);
  }
}
