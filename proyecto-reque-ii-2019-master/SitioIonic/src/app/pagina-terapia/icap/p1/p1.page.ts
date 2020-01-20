import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Almacenaje } from '../../../almacenaje';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {
  
  p1Form = this.fb.group({
    fullname: this.fb.group({
      nombre: ["", Validators.required],
      apellido1: ["", Validators.required],
      apellido2: ["", Validators.required]
    }),
    cedula: [0, Validators.required],
    direccion: this.fb.group({
      exacta: ["", Validators.required],
      provincia: ["", Validators.required],
      canton: ["", Validators.required],
      distrito: ["", Validators.required]
    }),
    telefono: this.fb.group({
      fijo: [0, Validators.required],
      celular: [0, Validators.required]
    }),
    institucion: ["", Validators.required],
    evaluador: ["", Validators.required],
    telefono_evaluador: this.fb.group({
      fijo: [0, Validators.required],
      celular: [0, Validators.required]
    }),
    encargados: ["", Validators.required],
    telefono_encargado: this.fb.group({
      fijo: [0, Validators.required],
      celular1: [0, Validators.required],
      celular2: [0, Validators.required]
    }),
    fecha_evaluacion: this.fb.group({
      dia: [0, Validators.required],
      mes: [0, Validators.required],
      agno: [0, Validators.required]
    }),
    fecha_nacimiento: this.fb.group({
      dia: [0, Validators.required],
      mes: [0, Validators.required],
      agno: [0, Validators.required]
    })
  });
  
  constructor(private fb: FormBuilder, private almacenaje: Almacenaje) { }

  ngOnInit() {
  }

  formSub(){
    if(this.p1Form.status == "INVALID"){alert('Error, pueden haber campos incompletos');return;}
    let form = this.p1Form.value;
    console.log(this.p1Form.value);
    const data = {
      "p_id_patient":form.cedula,
      "p_phones":[form.telefono.celular,form.telefono.fijo],
      "p_descriptions":["Paciente Mobil","Paciente Fijo"],
      "p_province":form.direccion.provincia,
      "p_canton":form.direccion.canton,
      "p_district":form.direccion.distrito,
      "p_direction":form.direccion.exacta
    };
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/insert_icap1';
    fetch(url+proc,{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{'Content-Type': 'application/json'}
    }).then(respuesta=>{if(respuesta.status===200)alert('Respuestas registradas correctmente')})
    .catch(error=>{alert('Error inesperado\nPor favor, intente más tarde')})
  }
}
