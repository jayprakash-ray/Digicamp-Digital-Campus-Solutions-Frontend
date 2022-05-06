import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
// import { PackageHandlingComponent } from './package-handling/package-handling.component';
import { CourierHandlingModule } from './courier-handling/courier-handling.module';
import { CouriersComponent } from './courier-handling/couriers/couriers.component';
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: CouriersComponent
  },{
    path: 'lost-found',
    component: LostFoundComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
