import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulePage } from './schedule';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage,
    /*children: [
      {
        path: 'session/:sessionId', loadChildren: '../session-detail/session-detail.module#SessionDetailModule' 
        /*path: 'session/:sessionId',
        loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule { }
