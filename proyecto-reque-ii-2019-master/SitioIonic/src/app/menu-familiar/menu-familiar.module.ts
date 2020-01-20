import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuFamiliarPage } from './menu-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuFamiliarPage]
})
export class MenuFamiliarPageModule {}
