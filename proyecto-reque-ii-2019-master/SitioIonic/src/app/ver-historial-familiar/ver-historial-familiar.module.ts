import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerHistorialFamiliarPage } from './ver-historial-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistorialFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerHistorialFamiliarPage]
})
export class VerHistorialFamiliarPageModule {}
