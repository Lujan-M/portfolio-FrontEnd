import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  data = {
    id_persona:0,
    nombre: '',
    apellido:'',
    titulo: '',
    acerca_de:'',
    perfil:''
  }

  editing_title = false
  editing_about = false

  @Input() edit!: boolean;

  constructor(private api: ApiService) { 

    this.api.get_persona().subscribe(response=>{
      console.log(response)
      this.data = {...response[0]}
      this.data.perfil = "https://portfolio-backendapp.herokuapp.com/static/"+this.data.perfil
    })

  }

  ngOnInit(): void {
    
  }

  handleChange = () => {
    let input = document.getElementById("about-input") as HTMLTextAreaElement
    this.data = {
      ...this.data,
      acerca_de: input.value
    }
  }

  handle_click = (e: any) => {
    let input = document.getElementById("up_profile")
    input?.click()
  }

  upload_file = (e: any) => {
    this.api.upload_file(e.target.files[0]).subscribe(response => {
      
      console.log("file")
      this.data.perfil = e.target.files[0].name
      this.api.put_persona(this.data.id_persona, this.data).subscribe(res=>{
        
        this.data.perfil = "https://portfolio-backendapp.herokuapp.com/static/"+e.target.files[0].name
      })
    })

  }
}
