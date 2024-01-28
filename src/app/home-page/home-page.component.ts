import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private productDb: ProductsService) {}

  products: any[] = [];
  nameValue = '';
  imgValue = '';
  priceValue = 0;
  discountValue = 0;

  getAllProducts() {
    this.productDb.getProducts()
                  .subscribe((data) => this.products = data)
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
