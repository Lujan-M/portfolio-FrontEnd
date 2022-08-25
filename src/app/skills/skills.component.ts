import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  dummy_data =[
    {
      skill: 'HTML',
      porcentaje: 55,
      color: '#e34c26',
    },
    {
      skill: 'CSS',
      porcentaje: 25,
      color: '#264de4',
    },
    {
      skill: 'JavaScript',
      porcentaje: 10,
      color: '#F0DB4F',
    },
    {
      skill: 'Angular',
      porcentaje: 15,
      color: '#a6120d',
    },
    {
      skill: 'Postgres',
      porcentaje: 60,
      color: '#336791',
    },
    {
      skill: 'JAVA',
      porcentaje: 30,
      color: '#F80102',
    },
    {
      skill: 'JAVA',
      porcentaje: 30,
      color: '#F80102',
    },    
]

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
