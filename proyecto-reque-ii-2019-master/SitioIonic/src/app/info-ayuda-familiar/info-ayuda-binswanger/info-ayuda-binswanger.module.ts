import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoAyudaBinswangerPage } from './info-ayuda-binswanger.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAyudaBinswangerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoAyudaBinswangerPage]
})
export class InfoAyudaBinswangerPageModule {}
