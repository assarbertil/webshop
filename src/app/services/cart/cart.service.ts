import { Injectable } from "@angular/core";
import { CartItem } from "src/app/interfaces/CartItem";
import { Movie } from "src/app/interfaces/Movie";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts: Movie[] = [];

  // Uses local storage service to read and write data
  constructor(private localStorage: LocalStorageService) {}

  // Add item to cart
  public addItem(product: Movie) {
    const cart = this.getItems();

    let newData;

    if (cart == null) {
      newData = [product];
    } else {
      newData = [...cart, product];
    }

    this.setCartData(newData);
  }

  // Remove item from cart
  public removeItem(id: number) {
    const cart = this.getItems();
    if (cart === null) return;

    const newData = cart.filter((item) => item.id !== id);

    this.setCartData(newData);
  }

  // Recieves items from local storage and sets as property
  public getItems(): Movie[] {
    const ls: Movie[] = this.localStorage.getItem("cart");
    // If "cart" is not set, make it an empty array
    if (ls === null) {
      this.setCartData([]);
      this.cartProducts = [];
    } else {
      this.cartProducts = ls;
    }

    return this.cartProducts;
  }

  public setCartData(data: Movie[]) {
    this.localStorage.setItem("cart", data);
    this.cartProducts = data;
  }

  public clearCart() {
    this.localStorage.setItem("cart", []);
    this.cartProducts = [];
  }

  // Groups identical movies and adds a new "amount" property
  public generateCheckoutItems(): CartItem[] {
    const cart = this.getItems();

    const counts: CartItem[] = []; // Variable that holds item counts
    // Iterate over all items in cart and find duplicates
    cart.forEach((movie) => {
      if (!counts.some((countI) => countI.id === movie.id)) {
        counts.push({
          id: movie.id,
          name: movie.name,
          price: movie.price,
          amount: 1,
        });
      } else {
        counts.filter((countI) => countI.id === movie.id)[0].amount++;
      }
    });

    return counts;
  }
}
