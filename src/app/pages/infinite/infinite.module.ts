import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitePageRoutingModule } from './infinite-routing.module';

import { InfinitePage } from './infinite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitePage]
})
export class InfinitePageModule {}
