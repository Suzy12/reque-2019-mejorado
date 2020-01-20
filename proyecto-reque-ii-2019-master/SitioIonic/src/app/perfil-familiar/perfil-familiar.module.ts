import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilFamiliarPage } from './perfil-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilFamiliarPage]
})
export class PerfilFamiliarPageModule {}
