import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PackageHandlingComponent } from 'src/app/package-handling/package-handling.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'
import { LostFoundModule } from 'src/app/lost-found/lost-found.module';
import { LoginComponent } from 'src/app/login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    PackageHandlingComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LostFoundModule,
    MatSidenavModule,
    MatTableModule,
  ],
  providers: [

    ]
})
export class DefaultModule { }
