import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden-component/forbidden.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard',canActivate:[AuthGuard],component: DashboardComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: AuthRegisterComponent},
  { path: 'forgot', component: AuthForgotPasswordComponent},
   {path: 'app-forbidden', component: ForbiddenComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
