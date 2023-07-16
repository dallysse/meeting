import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'sanctions',
    loadChildren: () => import('./sanctions/sanctions.module').then( m => m.SanctionsPageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'aides',
    loadChildren: () => import('./aides/aides.module').then( m => m.AidesPageModule)
  },
  {
    path: 'prets',
    loadChildren: () => import('./prets/prets.module').then( m => m.PretsPageModule)
  },
  {
    path: 'fond-caisses',
    loadChildren: () => import('./fond-caisses/fond-caisses.module').then( m => m.FondCaissesPageModule)
  },
  {
    path: 'detail-membres',
    loadChildren: () => import('./detail-membres/detail-membres.module').then( m => m.DetailMembresPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
