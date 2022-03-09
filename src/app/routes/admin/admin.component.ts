import { Component, OnInit } from "@angular/core";

import { OrdersService } from "src/app/services/orders.service";
import { Order } from "src/app/interfaces/Order";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((data) => (this.orders = data));
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.orderService
        .getAllOrders()
        .subscribe((data) => (this.orders = data));
    });
  }
}
