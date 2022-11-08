import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
    const productsLimit: number = 9;

    this.productsService.getLimitedProducts(productsLimit)
      .subscribe(res => {
        this.products = res.products;
        console.log(this.products);
      });
  }

}
