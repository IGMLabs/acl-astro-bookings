import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesPage } from './agencies.page';
import { AuthenticatedGuard } from '../auth/api/authenticated.guard';

const routes: Routes = [
  { path: '', component: AgenciesPage },
  // El orden es muy importante a la hora de ir haciendo los match de las rutas.
  { path: 'agency/new',
  // restringimos el paso a esta ruta, pasando por el service de guarda authenticated
    canLoad: [AuthenticatedGuard],
     loadChildren: () => import('./new-agency/new-agency.module').then(m => m.NewAgencyModule) },
  { path: 'agency/:id',
     loadChildren: () => import('./agency/agency.module').then(m => m.AgencyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
