import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'registration',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
