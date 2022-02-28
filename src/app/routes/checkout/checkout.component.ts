import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
})
export class CheckoutComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
