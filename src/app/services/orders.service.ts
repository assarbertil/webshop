import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Order, OrderRow } from "src/app/interfaces/Order";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  addOrder(
    email: string,
    paymentMethod: string,
    totalPrice: number,
    items: OrderRow[]
  ) {
    return this.http.post<Order>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/orders",
      {
        id: 0,
        companyId: 7,
        createdBy: email,
        paymentMethod: paymentMethod,
        totalPrice: totalPrice,
        orderRows: items,
      }
    );
  }

  deleteOrder(id: number) {
    return this.http.delete(
      `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${id}`
    );
  }

  getAllOrders() {
    return this.http.get<Order[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=7"
    );
  }
}
