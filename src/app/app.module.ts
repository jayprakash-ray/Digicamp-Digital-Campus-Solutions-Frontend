import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    DefaultModule,
    HttpClientModule,
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }