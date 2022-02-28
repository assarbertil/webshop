import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";

import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Movie) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
