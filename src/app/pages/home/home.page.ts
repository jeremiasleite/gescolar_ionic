import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dadosDashboard = [
    {
      title: 'Alunos',
      subtitle: '700',
      urlImg:
        '../../../assets/image/alunos.png',
    },
    {
      title: 'Total de Cursos',
      subtitle: '20',
      urlImg:
        '../../../assets/image/livros.png',
    },
    {
      title: 'Alunos Presentes',
      subtitle: '500',
      urlImg:
        '../../../assets/image/alunos.png',
    },
    {
      title: 'Alunos',
      subtitle: '700',
      urlImg:
        '../../../assets/image/alunos.png',
    },
  ];
  constructor(){}
  ngOnInit() {}
}
