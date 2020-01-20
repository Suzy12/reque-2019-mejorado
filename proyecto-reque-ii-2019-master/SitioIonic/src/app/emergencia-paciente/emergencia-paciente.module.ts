import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import{Geolocation} from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { EmergenciaPacientePage } from './emergencia-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenciaPacientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergenciaPacientePage],
  providers: [
    Geolocation
  ]
})
export class EmergenciaPacientePageModule {}
