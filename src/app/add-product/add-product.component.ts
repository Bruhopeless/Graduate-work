import { Component } from '@angular/core';
import { ProductModel, ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productDb: ProductsService, private route: ActivatedRoute) {
    route.params.subscribe(params=>this.id=params["id"]);
  }

  products: any[] = [];
  id = '';
  product: ProductModel;

  nameValue = '';
  imgValue = '';
  descriptionValue = '';
  aboutProductValue = '';
  detailsProductValue = '';
  shippingValue = '';
  priceValue = 0;
  discountValue = 0;
  countValue = 0;  

  getProduct() {
    this.productDb.getProduct(this.id)
                  .subscribe((data) => {
                    this.product = data;
                    this.editProduct(data);
                  });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  saveProduct() {
    this.productDb.editProduct({
      name: this.nameValue,
      img: this.imgValue,
      description: this.descriptionValue,
      aboutProduct: this.aboutProductValue,
      detailsProduct: this.descriptionValue,
      shipping: this.shippingValue,
      price: this.priceValue,
      discount: this.discountValue,
      count: this.countValue,
      id: this.id
    })
    .subscribe((data) => {
      this.getProduct();
    });

    this.nameValue = '';
    this.descriptionValue = '';
    this.aboutProductValue = '';
    this.descriptionValue = '';
    this.shippingValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
  }

  cancelProduct() {
    this.nameValue = '';
    this.descriptionValue = '';
    this.aboutProductValue = '';
    this.descriptionValue = '';
    this.shippingValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
  }

  editProduct (product: ProductModel) {
    this.nameValue = product.name;
    this.imgValue = product.img;
    this.descriptionValue = product.description;
    this.aboutProductValue = product.aboutProduct;
    this.detailsProductValue = product.detailsProduct;
    this.shippingValue = product.shipping;
    this.priceValue = product.price;
    this.discountValue = product.discount;
    this.countValue = product.count;
    this.id = product.id;
  }

  addProduct() {
    this.productDb.addProduct({
      name: this.nameValue,
      img: this.imgValue,
      description: this.descriptionValue,
      aboutProduct: this.aboutProductValue,
      detailsProduct: this.detailsProductValue,
      shipping: this.shippingValue,
      price: this.priceValue,
      discount: this.discountValue,
      count: this.countValue
    } as any)
    .subscribe ((data) => this.products.push(data));
    
    this.nameValue = '';
    this.descriptionValue = '';
    this.aboutProductValue = '';
    this.descriptionValue = '';
    this.detailsProductValue = '';
    this.shippingValue = '';
    this.imgValue = '';
    this.priceValue = 0;
    this.discountValue = 0;
    this.countValue = 0;
  }
}
