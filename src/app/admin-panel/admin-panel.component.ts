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

