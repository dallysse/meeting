import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondCaissesPageRoutingModule } from './fond-caisses-routing.module';

import { FondCaissesPage } from './fond-caisses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FondCaissesPageRoutingModule
  ],
  declarations: [FondCaissesPage]
})
export class FondCaissesPageModule {}
