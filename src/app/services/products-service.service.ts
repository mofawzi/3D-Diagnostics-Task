import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  // Get Products --> API
  getProducts(): Observable<any> {
    return this.http.get(
      'https://dummyjson.com/products'
    );
  }
  // Get Products --> API
  getLimitedProducts(limit: number): Observable<any> {
    return this.http.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
  }

}
