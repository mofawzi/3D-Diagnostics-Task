import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [
    {
      name: 'Product-1',
      description: 'Product description',
      price: 22,
    }, {
      name: 'Product-2',
      description: 'Product description',
      price: 52,
    }, {
      name: 'Product-3',
      description: 'Product description',
      price: 18,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
