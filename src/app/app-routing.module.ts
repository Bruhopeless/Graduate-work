import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { AdminGuard } from './admin.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { CartComponent } from './cart/cart.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'products',
    component: AdminPanelComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user-role',
    component: UserRoleComponent
  },
  {
    path: 'details/:id',
    component: DetailsProductComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
