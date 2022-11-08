import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  // Get Products --> API
  getProducts() {
    return this.http.get(
      'https://dummyjson.com/products'
    );
  }
  // Get Products --> API
  getLimitedProducts(limit: number) {
    return this.http.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
  }

}
