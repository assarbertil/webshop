import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { CartService } from "src/app/services/cart.service";
import { OrdersService } from "src/app/services/orders.service";

@Component({
  selector: "app-checkout-form",
  templateUrl: "./checkout-form.component.html",
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    paymentMethod: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkoutForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    const cartItems = this.cartService.generateCheckoutItems();

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );

    const processedOrderItems = cartItems.map((item) => ({
      productId: item.id,
      amount: item.amount,
    }));

    this.orderService
      .addOrder(
        this.checkoutForm.value.email,
        this.checkoutForm.value.paymentMethod,
        totalPrice,
        processedOrderItems
      )
      .subscribe((res) => {
        console.log(res);
        this.cartService.clearCart();
        this.router.navigate(["/success"]);
      });
  }
}
