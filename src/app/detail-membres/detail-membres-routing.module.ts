import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMembresPage } from './detail-membres.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailMembresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMembresPageRoutingModule {}
