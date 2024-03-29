import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductModel } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { UserOrderService } from '../service/user-order.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit {
  
  constructor(private productDb: ProductsService, private route: ActivatedRoute, private orderDb: UserOrderService) {
    route.params.subscribe(params=>this.id=params["id"]);
  }

  id = '';
  product: ProductModel;
  countModel = 1;
  cartInProduct = false;

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productDb.getProduct(this.id)
                  .subscribe((data) => this.product = data)
  }

  addProductToCart() {
    this.cartInProduct = true;
    setTimeout(() => {
      this.cartInProduct = false;
    }, 1500);
    this.orderDb.addProductToCart(this.product, this.countModel);
  }

}
