import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatCaissePageRoutingModule } from './etat-caisse-routing.module';

import { EtatCaissePage } from './etat-caisse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatCaissePageRoutingModule
  ],
  declarations: [EtatCaissePage]
})
export class EtatCaissePageModule {}
