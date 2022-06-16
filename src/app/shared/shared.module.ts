import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';
import { BookingsList } from './components/bookings/bookings.list';
import { EmailControl } from './controls/email/email.control';
import { InputTemplateControl } from './controls/template/input-template.control';
import { SearchControl } from './controls/search/search.control';
import { SelectTemplateControl } from './controls/template/select-template.control';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    BookingsList,
    EmailControl,
    InputTemplateControl,
    SearchControl,
    SelectTemplateControl
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    RouterModule, // Al exportar el router aqui, cualquiera que importe el shared, tendra acceso al routerlink (router module)
    // Al importarlo para usar desde otros hay que exportarlo.
    ReactiveFormsModule,
    BookingsList,
    EmailControl,
    InputTemplateControl,
    SelectTemplateControl,
    SearchControl
  ]
})
export class SharedModule { }
