import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../service/user-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(public orderDb: UserOrderService) { }

  orders: any[] = [];

  ngOnInit(): void {
    this.orderDb.getAllOrders();
    this.orderDb.getPrice();
  }

  deleteProduct(id: number) {
    this.orderDb.deleteProduct(id)
  }

}
