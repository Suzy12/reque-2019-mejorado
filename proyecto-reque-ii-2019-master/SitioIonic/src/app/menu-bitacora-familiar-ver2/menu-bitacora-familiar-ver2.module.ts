import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {IonicSelectableModule} from 'ionic-selectable';

import { MenuBitacoraFamiliarVer2Page } from './menu-bitacora-familiar-ver2.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBitacoraFamiliarVer2Page
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
  declarations: [MenuBitacoraFamiliarVer2Page]
})
export class MenuBitacoraFamiliarVer2PageModule {}
