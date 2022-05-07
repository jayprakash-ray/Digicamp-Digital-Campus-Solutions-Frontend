import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouriersComponent } from './couriers/couriers.component';
import { CourierHistoryComponent } from './courier-history/courier-history.component';
import { AddCourierComponent } from './add-courier/add-courier.component';
import {MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    
    CourierHistoryComponent,
    AddCourierComponent,
    CouriersComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class CourierHandlingModule { }
