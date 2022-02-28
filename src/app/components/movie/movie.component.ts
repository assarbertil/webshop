import { Component, HostListener, Input } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";

import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent {
  // Press escape to close modal
  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    event.key === "Escape" && this.hideModal();
  }

  // Where movie object is passed in from parent component
  @Input()
  movie!: Movie;

  modalOpen = false;

  constructor(private cartService: CartService) {}

  showModal() {
    this.modalOpen = true;
  }

  hideModal() {
    this.modalOpen = false;
  }

  addToCart(product: Movie) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
