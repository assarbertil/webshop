import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";
import { SearchService } from "src/app/services/search.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  searchResult: Movie[] = [];
  showSearch: boolean = false;
  searchValue: string = "";

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    // Used to set local search value variable to see if we should show search results
    this.search.currentSearchValue.subscribe((value) => {
      this.searchValue = value;
    });

    this.search.currentSearchResult.subscribe((data) => {
      // Check that we have data and some text in search field before showing search results
      if (
        this.searchValue.length > 0 &&
        Array.isArray(data) &&
        data.length > 0
      ) {
        this.searchResult = data;
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    });
  }
}
