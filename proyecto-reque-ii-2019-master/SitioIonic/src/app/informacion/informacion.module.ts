import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaProyectoComponent } from './pagina-proyecto/pagina-proyecto.component';
import { PaginaInformacionComponent } from './pagina-informacion/pagina-informacion.component';

import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';

import { InformacionPage } from './informacion.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  declarations: [
    InformacionPage,
    PaginaProyectoComponent,
    PaginaPrincipalComponent,
    PaginaInformacionComponent,
    ]
})
export class InformacionPageModule {}
