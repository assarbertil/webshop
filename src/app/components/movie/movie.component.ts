import { Component, HostListener, Input } from "@angular/core";
import { Movie } from "src/app/interfaces/Movie";

import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent {
  modalOpen = false;

  // Press escape to close modal
  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    event.key === "Escape" && this.hideModal();
  }

  @Input() // Where movie object is passed in from parent component
  movie!: Movie;

  constructor(private cartService: CartService) {}

  showModal() {
    this.modalOpen = true;
  }

  hideModal() {
    this.modalOpen = false;
  }

  addToCart(movie: Movie) {
    this.cartService.addItem(movie);
    this.hideModal();
  }
}
