import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/interfaces/CartItem";
import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.generateCheckoutItems();
    console.log("Cart items:", this.cartService.generateCheckoutItems());
  }

  removeFromCart(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.generateCheckoutItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  calcTotalPrice(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
  }
}
