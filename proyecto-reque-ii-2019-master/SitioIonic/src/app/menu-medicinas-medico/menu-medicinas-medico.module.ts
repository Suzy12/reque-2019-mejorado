import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuMedicinasMedicoPage } from './menu-medicinas-medico.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMedicinasMedicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuMedicinasMedicoPage]
})
export class MenuMedicinasMedicoPageModule {}
