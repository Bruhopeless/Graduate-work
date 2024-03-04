import { Component } from '@angular/core';
import { UserOrderService } from './service/user-order.service';
import { RoleServiceService } from './service/role-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(public roleDb: RoleServiceService) { }
}
