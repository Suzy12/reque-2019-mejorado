import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerHistorialMedicoPage } from './ver-historial-medico.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistorialMedicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerHistorialMedicoPage]
})
export class VerHistorialMedicoPageModule {}
