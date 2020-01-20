import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {IonicSelectableModule} from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { MenuBitacoraFamiliarAgregar2Page } from './menu-bitacora-familiar-agregar2.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBitacoraFamiliarAgregar2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule
  ],
  declarations: [MenuBitacoraFamiliarAgregar2Page]
})
export class MenuBitacoraFamiliarAgregar2PageModule {}
