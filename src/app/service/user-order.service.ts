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

  addProductToCart(order: ProductModel, countModel: number) {
    let cartModel = {
      name: order.name,
      img: order.img,
      userId: this.userId,
      productId: order.id,
      productCount: countModel,
      orderStatus: 'pre-order',
      price: order.price * countModel
    } as any
    this.httpCart.addOrder(cartModel)
                 .subscribe((data: any) => {
                  cartModel.id = data.id;
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

  getCount() {
    let count = 0;
    if(this.orders) {
      for (let i = 0; i < this.orders.length; i++) {
        count = this.orders[i].productCount + count;
      }
    }
    else {
      console.log('error');
    }
    return count;
  }

  getPrice() {
    let count = 0;
    if(this.orders) {
      for (let i = 0; i < this.orders.length; i++) {
        count = this.orders[i].price + count;
      }
    }
    else {
      console.log('error');
    }
    return count;
  }
}
