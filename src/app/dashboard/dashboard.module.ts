import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CardIntervalComponent } from './card-interval/card-interval.component';
import { CardWinnersYearComponent } from './card-winners-year/card-winners-year.component';
import { CardWinnersTopComponent } from './card-winners-top/card-winners-top.component';
import { CardWinnersMultipleComponent } from './card-winners-multiple/card-winners-multiple.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    CardIntervalComponent,
    CardWinnersYearComponent,
    CardWinnersTopComponent,
    CardWinnersMultipleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
