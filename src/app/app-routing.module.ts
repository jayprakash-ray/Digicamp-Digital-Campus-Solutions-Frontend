import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { PackageHandlingComponent } from './package-handling/package-handling.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '', component: DefaultComponent, children: [
      { path: 'package', component: PackageHandlingComponent, canActivate: [AuthGuard], data: { role: ['student', 'admin'] } },
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
