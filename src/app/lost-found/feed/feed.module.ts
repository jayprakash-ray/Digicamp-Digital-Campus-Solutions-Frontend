import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { FeedComponent } from './feed.component';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    CardComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule
  ],
  exports: [
    CardComponent,
    FeedComponent
  ]

})
export class FeedModule { }
