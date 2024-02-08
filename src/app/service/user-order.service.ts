import { Injectable } from '@angular/core';
import { CartModel, CartService } from './cart.service';
import { RoleServiceService } from './role-service.service';
import { ProductModel } from './products.service';

@Injectable({
  providedIn: 'root' 
})
export class UserOrderService {

  constructor(private httpCart: CartService, private httpRole: RoleServiceService) {
    this.userId = this.httpRole.currentUser.id;
    this.getAllOrders();
   }

  orders: CartModel[];
  userId: number;

  getAllOrders() {
    this.httpCart.getOrders()
                 .subscribe((data) => {
                  this.orders = data.filter(item => item.userId === this.userId)
                });
  }

  addProductToCart(order: ProductModel) {
    let cartModel = {
      name: order.name,
      img: order.img,
      userId: this.userId,
      productId: order.id,
      productCount: order.count,
      orderStatus: 'pre-order',
      id: 0
    }
    this.httpCart.addOrder(cartModel)
                 .subscribe((data) => {
                  cartModel.id = data as any;
                  this.orders.push(cartModel);
                });
  }

  deleteProduct(id: number) {
    this.httpCart.deleteOrder(id)
                  .subscribe((data) => {
                    console.log(data)
                    this.orders = this.orders.filter(item => item.id != id)
                  });
  }

}
