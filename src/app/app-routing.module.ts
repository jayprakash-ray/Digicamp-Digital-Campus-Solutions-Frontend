import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { PackageHandlingComponent } from './package-handling/package-handling.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: PackageHandlingComponent
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
