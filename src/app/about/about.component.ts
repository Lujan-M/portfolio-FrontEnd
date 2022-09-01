import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dummy_data = {
    nombre: 'Sabrina Maidana',
    titulo: 'Full Stack Developer Jr.',
    about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem a porro, libero ducimus, totam laudantium voluptate facilis nemo enim nulla magni.'
  }

  editing_title = false
  editing_about = false

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange = () => {
    let input = document.getElementById("about-input") as HTMLTextAreaElement
    this.dummy_data = {
      ...this.dummy_data,
      about: input.value
    }
  }

}
