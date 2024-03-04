import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductsService } from '../service/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {

  constructor(private productDb: ProductsService) {}

  products: any[] = [];

  nameValue = '';
  imgValue = '';
  descriptionValue = '';
  aboutProductValue = '';
  detailsProductValue = '';
  shippingValue = '';
  priceValue = 0;
  discountValue = 0;
  countValue = 0;  
  id = -1;

  getAllProducts() {
    this.productDb.getProducts()
                  .subscribe((data) => this.products = data)
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteProduct(id: number) {
    this.productDb.deleteProduct(id)
                  .subscribe((data) => {
                    console.log(data)
                    this.products = this.products.filter(item => item.id != id)
                  });
  }
}

