import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleServiceService } from './service/role-service.service';

@Injectable({
    providedIn: 'root'
  })
export class LoginGuard {

    constructor(private userServ: RoleServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.userServ.userExist()) {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}