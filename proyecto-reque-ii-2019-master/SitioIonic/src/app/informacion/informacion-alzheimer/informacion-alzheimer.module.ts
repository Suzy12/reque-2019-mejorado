import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacionAlzheimerPage } from './informacion-alzheimer.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionAlzheimerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacionAlzheimerPage]
})
export class InformacionAlzheimerPageModule {}
