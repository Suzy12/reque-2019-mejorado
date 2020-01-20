import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoAyudaParkinsonPage } from './info-ayuda-parkinson.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAyudaParkinsonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoAyudaParkinsonPage]
})
export class InfoAyudaParkinsonPageModule {}
