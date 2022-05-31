import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [

  {
    path:'',
    component: HomePage
  },
  // No haria falta hacer la carga perezosa de forma manual, hay comando ( ng  )
  // {
  //   path:'about',
  //   loadChildren: () => import('./about/about.module').then( (m) => m.AboutModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

