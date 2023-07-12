import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretsPage } from './prets.page';

const routes: Routes = [
  {
    path: '',
    component: PretsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretsPageRoutingModule {}
