import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCourierComponent } from './update-courier/update-courier.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CouriersComponent } from './couriers.component';
import { MatTableModule } from '@angular/material/table'  
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UpdateCourierComponent,
    CouriersComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule

    
  ]
})
export class CouriersModule { }
