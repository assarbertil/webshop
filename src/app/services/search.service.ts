import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Movie } from "src/app/interfaces/Movie";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private searchValueSource = new BehaviorSubject<string>("");
  currentSearchValue = this.searchValueSource.asObservable();

  private searchResultSource = new BehaviorSubject<Movie[]>([]);
  currentSearchResult = this.searchResultSource.asObservable();

  constructor(private http: HttpClient) {}

  setSearchValue(searchValue: string) {
    if (searchValue.length > 0) {
      this.searchFromAPI(searchValue).subscribe((searchResults) =>
        this.searchResultSource.next(searchResults)
      );
    }

    this.searchValueSource.next(searchValue);
  }

  searchFromAPI(searchValue: string) {
    return this.http.get<Movie[]>(
      `https://medieinstitutet-wie-products.azurewebsites.net/api/search?=${searchValue}`
    );
  }
}
