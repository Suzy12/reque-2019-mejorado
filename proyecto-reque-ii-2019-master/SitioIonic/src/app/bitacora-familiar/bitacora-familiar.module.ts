import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BitacoraFamiliarPage } from './bitacora-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: BitacoraFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BitacoraFamiliarPage]
})
export class BitacoraFamiliarPageModule {}
