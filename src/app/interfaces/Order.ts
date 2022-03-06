export interface OrderRow {
  id?: number;
  productId: number;
  product?: any;
  amount: number;
  orderId?: number;
}

export interface Order {
  id: number;
  companyId: 7;
  created: string;
  createdBy: string;
  paymentMethod: "PayPal" | "Card";
  totalPrice: number;
  status: number;
  orderRows: OrderRow[];
}
