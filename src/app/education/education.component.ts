import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  dummy_data = [
    {
      logo: "https://www.creativefabrica.com/wp-content/uploads/2021/04/23/Cute-cat-pet-shop-logo-design-Graphics-11223900-1-580x386.png",
      fecha:"01/21-01/22",
      actividad: "Acariciadora",
      descripcion: "Acariciar gatitos todo el día, rascar sus pancitas, también alimentarlos.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat impedit.",
    },
    {
      logo: "https://images-platform.99static.com//E0Nj-T5t0FgyOymYsoYH1haL8Sg=/0x213:886x1099/fit-in/500x500/projects-files/114/11406/1140660/53bdc7db-ae98-41ec-9b03-56b97a5e45dc.png",
      fecha:"01/21-01/22",
      actividad: "Acariciadora",
      descripcion: "Acariciar perritos todo el día, rascar sus pancitas, también alimentarlos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat impedit.",
    },
  ];


  @Input() edit!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
