import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  {path: 'package', component:PackageComponent},
  {path: 'lost-found', component:LostFoundComponent},
  {path: "**", component:DefaultComponent,
children: [{
    path:'',
    component: DashboardComponent
}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
