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

  userExist() {
    if(this.currentUser != undefined) {
      return true;
    } else {
      return false;
    }
  }

  currentUserAdmin() {
    if (this.currentUser?.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

}
