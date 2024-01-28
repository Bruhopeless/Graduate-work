import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { AdminGuard } from './admin.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent
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
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'products',
    component: AdminPanelComponent
  },
  {
    path: 'user-role',
    component: UserRoleComponent
  },
  {
    path: 'details/:id',
    component: DetailsProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
