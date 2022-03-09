import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    const response = JSON.parse(localStorage.getItem(key) || "{}");

    if (Object.keys(response).length === 0) return null;
    return response;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
