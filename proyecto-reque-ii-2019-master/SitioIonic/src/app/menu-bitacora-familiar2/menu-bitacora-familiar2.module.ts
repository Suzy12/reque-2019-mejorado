import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuBitacoraFamiliar2Page } from './menu-bitacora-familiar2.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBitacoraFamiliar2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuBitacoraFamiliar2Page]
})
export class MenuBitacoraFamiliar2PageModule {}
