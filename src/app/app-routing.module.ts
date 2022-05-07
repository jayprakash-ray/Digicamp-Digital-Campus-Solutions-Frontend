import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouriersComponent } from './courier-handling/couriers/couriers.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '', component: DefaultComponent, children: [
      { path: '', component: CouriersComponent, canActivate: [AuthGuard], data: { role: ['student', 'admin'] } },
      { path: 'package', component: CouriersComponent, canActivate: [AuthGuard], data: { role: ['student', 'admin'] } },
      { path: 'lost-found', component: LostFoundComponent, canActivate: [AuthGuard], data: { role: ['student', 'admin'] } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
