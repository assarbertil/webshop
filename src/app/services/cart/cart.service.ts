import { Injectable } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Movie[] = [];

  constructor() {}

  addToCart(product: Movie) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
