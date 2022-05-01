import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { LostComponent } from './lost/lost.component';
import { FoundComponent } from './found/found.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { FeedModule } from './feed/feed.module';

import { FormsModule } from '@angular/forms';
import { LostFoundComponent } from './lost-found.component';

@NgModule({
  declarations: [
    LostComponent,
    FoundComponent,
    LostFoundComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    FeedModule,
    FormsModule
  ], exports: [
    LostComponent,
    FoundComponent
  ]
})
export class LostFoundModule { }
