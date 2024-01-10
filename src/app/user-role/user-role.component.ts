import { Component, OnInit } from '@angular/core';
import { ServiceRegService, userModel } from '../service/service-reg.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.css'
})
export class UserRoleComponent implements OnInit {

  constructor (private userDb: ServiceRegService) {}

  users: any[] = [];

  roles = '';

  getAllUsers() {
    this.userDb.getUsers()
               .subscribe((data) => this.users = data)
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  swapRole(user: userModel) {
    if(user.role === 'user') {
      return 'admin';
    }
    else {
      return 'user';
    }
  }

  changeRole(user: userModel) {
    this.userDb.swapRole({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      pass: user.pass,
      role: this.swapRole(user),
      id: user.id
    }).subscribe((data) => {
      this.getAllUsers()
    });
  }
}
