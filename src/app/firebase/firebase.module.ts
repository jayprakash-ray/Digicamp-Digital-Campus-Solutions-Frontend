import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AngularFireModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    AngularFirestoreModule, 
    AngularFireDatabaseModule
  ]
})
export class FirebaseModule { }
