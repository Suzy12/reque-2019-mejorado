import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatExpansionModule} from '@angular/material/expansion'
import { MatIconModule } from '@angular/material';

import { IonicModule } from '@ionic/angular';

import { FaqsPage } from './faqs.page';

const routes: Routes = [
  {
    path: '',
    component: FaqsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatIconModule
  ],
  declarations: [FaqsPage]
})
export class FaqsPageModule {}
