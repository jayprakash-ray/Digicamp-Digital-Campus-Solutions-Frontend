import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  {path: 'package', component:PackageComponent},
  {path: 'lost-found', component:LostFoundComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
