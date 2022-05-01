import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PackageHandlingComponent } from 'src/app/package-handling/package-handling.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    DefaultComponent,
    PackageHandlingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [

    ]
})
export class DefaultModule { }
