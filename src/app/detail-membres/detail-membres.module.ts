import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMembresPageRoutingModule } from './detail-membres-routing.module';

import { DetailMembresPage } from './detail-membres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMembresPageRoutingModule
  ],
  declarations: [DetailMembresPage]
})
export class DetailMembresPageModule {}
