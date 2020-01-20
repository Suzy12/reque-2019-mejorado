import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { VerCalendarioPageModule } from '../ver-calendario/ver-calendario.module'
import { AgregarRecordatorioPageModule } from '../agregar-recordatorio/agregar-recordatorio.module'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ScheduleModule,
    SessionDetailModule,
    VerCalendarioPageModule,
    AgregarRecordatorioPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
