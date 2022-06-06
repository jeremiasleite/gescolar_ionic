import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { NgCalendarModule  } from 'ionic2-calendar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CalendarModule } from './components/calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CalendarModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
/*link de exemplo
https://preview.themeforest.net/item/smart-angular-9-admin-dashboard-
template-for-university-school-colleges/full_screen_preview/26433943?_ga=2.158467641.2041034290.1653568162-550481556.1574648729
https://www.freepik.com/*/
