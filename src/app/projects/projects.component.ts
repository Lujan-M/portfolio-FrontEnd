import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  dummy_data = [
    {
      titulo: 'Pyecto 1',
      descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, consequuntur commodi cum delectus quam rem autem vitae iste! Quia ratione reiciendis tempore doloremque quis eaque commodi nihil iste? Quasi, expedita.',
      github: 'https://github.com/Lujan-M/StrayPaws',
      view: 'https://straypaws.netlify.app/',
    },
    {
      titulo: 'Pyecto 2',
      descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, consequuntur commodi cum delectus quam rem autem vitae iste! Quia ratione reiciendis tempore doloremque quis eaque commodi nihil iste? Quasi, expedita.',
      github: '',
      view: '',
    },
    {
      titulo: 'Pyecto 3',
      descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, consequuntur commodi cum delectus quam rem autem vitae iste! Quia ratione reiciendis tempore doloremque quis eaque commodi nihil iste? Quasi, expedita.',
      github: '',
      view: '',
    }

  ]

  @Input() edit!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
