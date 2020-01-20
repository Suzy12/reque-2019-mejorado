import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { VerCalendarioPage } from '../ver-calendario/ver-calendario.page'
import { AgregarRecordatorioPage } from '../agregar-recordatorio/agregar-recordatorio.page'


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule'
            //component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            //loadChildren: '../session-detail/session-detail.module#SessionDetailModule',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'ver-calendario',
        children: [
          {
            path: '',
            //component: VerCalendarioPage
            loadChildren: '../ver-calendario/ver-calendario.module#VerCalendarioPageModule',
          },
        ]
      },
      {
        path: 'agregar',
        children: [
          {
            path: '',
            loadChildren: '../agregar-recordatorio/agregar-recordatorio.module#AgregarRecordatorioPageModule'
            //component: AgregarRecordatorioPage,
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: '',
            //component: SchedulePage,
            loadChildren: '../schedule/schedule.module#ScheduleModule'
          }
        ]
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

