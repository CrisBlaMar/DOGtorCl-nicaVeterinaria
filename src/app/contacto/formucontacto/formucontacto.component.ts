import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailService } from './email.service';

@Component({
  selector: 'app-formucontacto',
  templateUrl: './formucontacto.component.html',
  styleUrls: ['./formucontacto.component.css']
})
export class FormucontactoComponent implements OnInit {

  constructor(private emailservice : EmailService, private form : FormBuilder) { }
  email = localStorage.getItem("email");
  mensaje: FormGroup = this.form.group({
    to: ["crisblancomartin96@gmail.com"],
    subject: [],
    text : []  
  })


  enviarmensaje(){
    this.emailservice.enviarMensaje(this.mensaje.value)
    .subscribe({
      next: (resp =>{
        this.mensaje.reset();
        console.log(this.mensaje)
      })
    })
  }


  ngOnInit(): void {
  }

}
