import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaTerapiaPage } from './pagina-terapia.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaTerapiaPage,
    children: [
      {
        path: 'tareas',
        children: [
          {
            path: '',
            loadChildren: './tareas/tareas.module#TareasPageModule'
          }
        ]
      },
      {
        path: 'icap',
        children: [
          {
            path: '',
            loadChildren: './icap/icap.module#IcapPageModule',
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: './icap/icap.module#IcapPageModule',
          }
        ]
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaTerapiaPage]
})
export class PaginaTerapiaPageModule {}
