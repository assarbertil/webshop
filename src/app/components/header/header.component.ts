import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "../../services/search/search.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  searchValue = new FormControl("");

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    // Every time search value changes, update service with new value
    this.searchValue.valueChanges.subscribe((value) =>
      this.search.setSearchValue(value)
    );
  }
}
