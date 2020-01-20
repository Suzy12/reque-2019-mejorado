import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerCalendarioPage } from './ver-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: VerCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerCalendarioPageRoutingModule { }