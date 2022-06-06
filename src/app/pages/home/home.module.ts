//import { CalendarMode } from 'ionic2-calendar/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgCalendarModule  } from 'ionic2-calendar';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CardDashboardComponent } from 'src/app/components/card-dashboard/card-dashboard.component';
import { CalendarModule } from '../../components/calendar/calendar.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule,
    CalendarModule
  ],
  declarations: [
    HomePage,
    CardDashboardComponent
  ]
})
export class HomePageModule {}
