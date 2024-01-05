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
  priceValue = 0;
  discountValue = 0;
  countValue = 0;  
  editMode = false;
  id = -1;

  getAllProducts() {
    this.productDb.getProducts()
                  .subscribe((data) => this.products = data)
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addProduct() {
    this.productDb.addProduct({
      name: this.nameValue,
      img: this.imgValue,
      description: this.descriptionValue,
      price: this.priceValue,
      discount: this.discountValue,
      count: this.countValue,
      id: 0
    })
    .subscribe ((data) => this.products.push(data));
    this.nameValue = '';
    this.descriptionValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
  }

  editProduct (product: ProductModel) {
    this.editMode = true;

    this.nameValue = product.name;
    this.imgValue = product.img;
    this.descriptionValue = product.description;
    this.priceValue = product.price;
    this.discountValue = product.discount;
    this.countValue = product.count;
    this.id = product.id;
  }

  saveProduct() {
    this.productDb.editProduct({
      name: this.nameValue,
      img: this.imgValue,
      description: this.descriptionValue,
      price: this.priceValue,
      discount: this.discountValue,
      count: this.countValue,
      id: this.id
    })
    .subscribe((data) => {
      this.getAllProducts()
    });

    this.nameValue = '';
    this.descriptionValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
    this.editMode = false;
  }

  cancelProduct() {
    this.nameValue = '';
    this.descriptionValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
    this.editMode = false;
  }

  deleteProduct(id: number) {
    this.productDb.deleteProduct(id)
                  .subscribe((data) => {
                    console.log(data)
                    this.products = this.products.filter(item => item.id != id)
                  });
  }
}

