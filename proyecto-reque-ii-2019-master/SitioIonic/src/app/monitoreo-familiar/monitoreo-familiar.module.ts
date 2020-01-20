import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { MonitoreoFamiliarPage } from './monitoreo-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoreoFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonitoreoFamiliarPage]
})
export class MonitoreoFamiliarPageModule {}
