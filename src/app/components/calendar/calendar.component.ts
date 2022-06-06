import { ChangeDetectorRef, Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import { PopoverComponent } from './components/popover/popover.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent{
  months = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];
  weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  n = 7;
  arrayDays: number[];
  dateNow: moment.Moment;
  monthNowNumber: number;
  year: number;

  dataMonths: any[]=[];

  events: any[] = [
    {descricao: 'avaliação do 1 ano', data: moment('2022-06-07')},
    {descricao: 'viagem para o parque da jaqueira', data: moment('2022-06-07')},
    {descricao: 'feriado municipal-1', data: moment('2022-06-13')},
    {descricao: 'feriado municipal-2', data: moment('2022-07-13')},
    {descricao: 'feriado municipal-3', data: moment('2022-06-09')}
  ];

  constructor(private cd: ChangeDetectorRef, private popoverCtrl: PopoverController) {

    this.dateNow = moment();
    this.monthNowNumber = this.dateNow.month();
    this.year = this.dateNow.year();
    this.generateYear(this.year);
  }

  public createCalendar(month: moment.Moment) {
    const firstDay = month.startOf('M');
    const days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map((n) => moment(firstDay).add(n, 'd'));

    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    const x = 42 - days.length;
    if (days.length < 42) {
      for (let i = 0; i < x; i++) {
        days.push(null);
      }
    }
    return days;
  }

  /**
   * generateYear
  year: number   */
  public generateYear(year: number) {
    for (let i = 0; i < 12; i++) {
      const mes = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      const date = moment(year+'-'+mes[i]+'-01');
      this.dataMonths.push({
        month: date.month(),
        year: date.year(),
        firstDay: date.startOf('M').day(),
        arrayDays: this.createCalendar(date)}
      );
    }
  }

  public isToday(day: moment.Moment) {
    if(day!=null){
      if (moment().format('L') === day.format('L')) {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }

  /**
   * formatDay
  date: any     */
  public formatDay(date: any) {
    if(date!==null){
      return +date.format('D');
    }else{
      return null;
    }
  }

  public chegouFim(){
    this.year++;
    this.dataMonths = [];
    this.generateYear(this.year);
    this.cd.detectChanges();
  }

  /**
   * reComecou
   */
  public reComecou() {
    this.year--;
    this.dataMonths = [];
    this.generateYear(this.year);
    this.cd.detectChanges();
  }

  public event(day: moment.Moment) {
    if(day!=null){
      if (moment('2022-06-07').format('L') === day.format('L')) {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }

  async showPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      componentProps: {events: this.events},
      event
    });
    await popover.present();
  }
}
