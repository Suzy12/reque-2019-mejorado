import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoAyudaLewyPage } from './info-ayuda-lewy.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAyudaLewyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoAyudaLewyPage]
})
export class InfoAyudaLewyPageModule {}
