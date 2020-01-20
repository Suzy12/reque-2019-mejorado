import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoAyudaAlzheimerPage } from './info-ayuda-alzheimer.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAyudaAlzheimerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoAyudaAlzheimerPage]
})
export class InfoAyudaAlzheimerPageModule {}
