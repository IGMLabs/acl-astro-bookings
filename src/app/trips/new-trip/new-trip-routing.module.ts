import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTripForm } from './new-trip.form';

const routes: Routes = [{ path: '', component: NewTripForm }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTripRoutingModule { }
