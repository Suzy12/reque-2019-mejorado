import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaParkinsonPage } from './pagina-parkinson.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaParkinsonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaParkinsonPage]
})
export class PaginaParkinsonPageModule {}
