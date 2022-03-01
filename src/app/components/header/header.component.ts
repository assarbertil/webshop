import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";
import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  items: Movie[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.cartProducts;
  }
}
