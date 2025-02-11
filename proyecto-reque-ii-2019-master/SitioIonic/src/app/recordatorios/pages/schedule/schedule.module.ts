import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

import { SchedulePage } from './schedule';
import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [
    SchedulePage,
  ],
})
export class ScheduleModule { }
