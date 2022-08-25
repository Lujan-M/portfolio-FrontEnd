import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    contrasena: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  login = (e: any) => {
    e.preventDefault()
    const email = document.getElementById("envelope")
    if (/\S+@\S+\.\S+/.test(this.user.email)) {
      console.log(this.user)
      if (email){
        email.style.color = "#393939";
      }
    }else{
      let invalid = document.getElementById("validation")
      if (email && invalid){
        email.style.color = "red";
        invalid.style.visibility = "visible";
      }
    }

    if (this.user.contrasena === '') {
      let invalid = document.getElementById("validationpass")  
      let invalido = document.getElementById("lock") 
      if (invalid && invalido) {
        invalid.style.visibility = "visible"
        invalido.style.color = "red";
      }
    }

  }

  handleChange = (e: any) => {

    if (e.target.id === "email") {
      this.user.email = e.target.value
    }else if (e.target.id === "password") {
      this.user.contrasena = e.target.value
    }

  }

  focus = (e: any) => {
    
    if (e.target.id === "email") {
      const email = document.getElementById("envelope")
      const invalid = document.getElementById("validation")
      if (email && invalid) {
        email.style.color = "#393939";
        invalid.style.visibility = "hidden";
      }
    }else if (e.target.id === "password") {
      const contrasena = document.getElementById("lock")
      const invalido = document.getElementById("validationpass")
      if (contrasena && invalido){
        contrasena.style.color = "#393939";
        invalido.style.visibility = "hidden";
      }
    }
  }
  

  @Output("toggleShow") toggleShow: EventEmitter<any> = new EventEmitter();

}
