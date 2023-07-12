import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretsPageRoutingModule } from './prets-routing.module';

import { PretsPage } from './prets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretsPageRoutingModule
  ],
  declarations: [PretsPage]
})
export class PretsPageModule {}
