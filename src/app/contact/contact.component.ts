import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Contact {
  name: string;
  email:string;
  message:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // public form!: FormGroup;  // opcion 1 de crear una propiedad publica sin inicializar.
  public form : FormGroup;

  constructor( formBuilder:FormBuilder ) {
    // Inicializamos el formulario de contacto
    this.form = formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public onSave(){
      const contact = this.form.value;
      console.warn('Send contact message', contact);
  }

}
