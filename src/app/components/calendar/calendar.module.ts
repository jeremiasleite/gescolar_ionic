import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { CalendarComponent } from './calendar.component';
import { PopoverComponent } from './components/popover/popover.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  declarations: [CalendarComponent, PopoverComponent],
  exports: [CalendarComponent]
})
export class CalendarModule {}




