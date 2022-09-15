import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  variable = 'something';

  @Input() edit!: boolean;
  
  data = {banner: "", id_persona: 0}

  constructor(private api: ApiService) { 

    this.api.get_persona().subscribe(response=>{
      this.data = {...response[0]}
      this.data.banner = "https://portfolio-backendapp.herokuapp.com/static/"+this.data.banner
    })

  }
  show: boolean = false;

  toggleShow = () => {
    this.show = false;
  } 
    
  ngOnInit(): void {
  }

  @Output("toggleEdit") toggleEdit: EventEmitter<any> = new EventEmitter();

  upload_file = (e: any) => {
    this.api.upload_file(e.target.files[0]).subscribe(response => {
      
      console.log("file")
      this.data.banner = e.target.files[0].name
      this.api.put_persona(this.data.id_persona, this.data).subscribe(res=>{
        
        this.data.banner = "https://portfolio-backendapp.herokuapp.com/static/"+e.target.files[0].name
      })
    })

  }

  handle_click = (e: any) => {
    let input = document.getElementById("up_banner")
    input?.click()
  }

}
