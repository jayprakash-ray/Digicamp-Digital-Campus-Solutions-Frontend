import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PackageComponent } from './package/package.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LostComponent } from './lost-found/lost/lost.component';
import { FoundComponent } from './lost-found/found/found.component';
import { FeedComponent } from './lost-found/feed/feed.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './lost-found/feed/card/card.component';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PackageComponent,
    FaceDetectionComponent,
    PackageFormComponent,
    LostFoundComponent,
    LostComponent,
    FoundComponent,
    FeedComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
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
    MatRippleModule
  ],
  entryComponents: [
    PackageFormComponent
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
