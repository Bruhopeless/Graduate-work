import { Component } from '@angular/core';
import { UserOrderService } from '../service/user-order.service';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrl: './info-cart.component.css'
})
export class InfoCartComponent {

  constructor(public orderDb: UserOrderService) { }

}
