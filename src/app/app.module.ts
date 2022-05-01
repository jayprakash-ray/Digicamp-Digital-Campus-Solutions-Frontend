import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { PackageFormComponent } from './package-form/package-form.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatTabsModule,
    MatGridListModule,
    MatChipsModule,
    FormsModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  entryComponents: [
    PackageFormComponent
  ],
  exports: [
=======
    DefaultModule
>>>>>>> 8fe8dbb7bffaffd73af7a7e30d580f4ea8b5d8e0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }