import { Component, Input, OnInit } from "@angular/core";
import { IMovie } from "src/app/interfaces/IMovie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent implements OnInit {
  @Input() movie!: IMovie;
  constructor() {}

  ngOnInit(): void {}
}
