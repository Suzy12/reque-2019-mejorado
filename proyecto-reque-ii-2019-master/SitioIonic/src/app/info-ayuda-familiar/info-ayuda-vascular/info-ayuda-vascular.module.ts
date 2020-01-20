import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoAyudaVascularPage } from './info-ayuda-vascular.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAyudaVascularPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoAyudaVascularPage]
})
export class InfoAyudaVascularPageModule {}
