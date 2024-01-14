import { Injectable } from '@angular/core';
import { userModel } from './service-reg.service';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor() { }

  currentUser: userModel;
  
  saveUser(user: userModel) {
    this.currentUser = user;
  }

  currentUserAdmin() {
    if (this.currentUser?.role === 'admin') {
      return true;
    }
    else {
      return false;
    }
  }

}
