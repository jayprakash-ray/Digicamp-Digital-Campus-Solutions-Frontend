import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PackageHandlingComponent } from 'src/app/package-handling/package-handling.component';
import {MatSidenavModule} from '@angular/material/sidenav';
// import { MatTableModule } from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field'
// import {MatInputModule} from '@angular/material/input';
import { LostFoundModule } from 'src/app/lost-found/lost-found.module';
import { LoginComponent } from 'src/app/login/login.component';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatSortModule} from '@angular/material/sort';
import { CourierHandlingModule } from 'src/app/courier-handling/courier-handling.module';
@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LostFoundModule,
    MatSidenavModule,
    MatFormFieldModule,
    CourierHandlingModule

  ],
  providers: [

    ]
})
export class DefaultModule { }
