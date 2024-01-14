import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleServiceService } from './service/role-service.service';

@Injectable({
    providedIn: 'root'
  })
export class AdminGuard {

    constructor(private userServ: RoleServiceService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.userServ.currentUserAdmin();
    }
}