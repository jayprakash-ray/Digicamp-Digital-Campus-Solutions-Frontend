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
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    UpdateCourierComponent,
    CouriersComponent,
    OtpDialogComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class CouriersModule { }
