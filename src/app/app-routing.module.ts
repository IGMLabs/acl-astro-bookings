import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [

  {
    path:'',
    component: HomePage
  },
  // No haria falta hacer la carga perezosa de forma manual, hay comando ( ng g m about --route=about --module=app )
   {
     path:'about',
     loadChildren: () => import('./about/about.module').then( (m) => m.AboutModule),
   },
  { path: 'contact',
   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

