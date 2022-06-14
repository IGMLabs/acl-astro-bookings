import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsList } from './components/bookings/bookings.list';
import { EmailControl } from './controls/email/email.control';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    BookingsList,
    EmailControl
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
    ReactiveFormsModule, BookingsList, EmailControl
  ]
})
export class SharedModule { }
