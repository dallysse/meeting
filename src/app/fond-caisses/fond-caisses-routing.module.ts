import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FondCaissesPage } from './fond-caisses.page';

const routes: Routes = [
  {
    path: '',
    component: FondCaissesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FondCaissesPageRoutingModule {}
