import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';

import { AgregarRecordatorioPage } from './agregar-recordatorio.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecordatorioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicSelectableModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarRecordatorioPage]
})
export class AgregarRecordatorioPageModule {}
