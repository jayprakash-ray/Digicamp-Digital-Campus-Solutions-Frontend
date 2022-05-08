import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { LostComponent } from './lost/lost.component';
import { FoundComponent } from './found/found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { FeedModule } from './feed/feed.module';

import { FormsModule } from '@angular/forms';
import { LostFoundComponent } from './lost-found.component';
import { FirebaseModule } from '../firebase/firebase.module';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    LostComponent,
    FoundComponent,
    LostFoundComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    FeedModule,
    FormsModule,
    FirebaseModule,

    MatIconModule
  ], exports: [
    LostComponent,
    FoundComponent
  ]
})
export class LostFoundModule { }
