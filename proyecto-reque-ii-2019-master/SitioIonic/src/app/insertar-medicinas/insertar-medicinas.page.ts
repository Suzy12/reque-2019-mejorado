import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

class Usuario {
  public cedula: number;
  public nombre: string;
}

@Component({
  selector: 'app-insertar-medicinas',
  templateUrl: './insertar-medicinas.page.html',
  styleUrls: ['./insertar-medicinas.page.scss'],
})
export class InsertarMedicinasPage implements OnInit {
  
  inputNombreMedicamento = '';
  inputDosis = '';
  inputNombrePaciente = '';
  inputPaciente = '';
  fechaActual = new Date();
  fechaInicio = '';
  fehcaFin = '';

  usuarios: Usuario[] = [];
  usuario: Usuario;


  constructor() {
    this.cargarPacientes();
  }


  ngOnInit() {
  }

  agregarMedicamento() {
    if(this.inputNombreMedicamento.length === 0 || this.inputDosis.length === 0 || this.usuario === undefined || this.fechaInicio.length === 0 || this.fehcaFin.length === 0 ) {
      alert('No se permiten datos vacios');
    }
    else{
      const medicinesbyuser = {
        p_name: this.inputNombreMedicamento,
        p_idpatient: this.usuario.cedula,
        p_dose: this.inputDosis,
        p_datestart: this.fechaInicio,
        p_dateend: this.fehcaFin
      };
  
  
      const dateFechaInicio = new Date(this.fechaInicio);
      const dateFechaFin = new Date(this.fehcaFin);
  
      const conection = 'http://base-datos-1.herokuapp.com/rpc/insertmedicinesbyuser';
  
      fetch(conection, {
        method: 'POST',
        body: JSON.stringify(medicinesbyuser),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if(response.ok){
          alert('Medicina agregada con exito');
          this.reiniciarValores();
        } else {
          console.log(response);
          alert('No se logró agregar la medicina');
        }
      });
    }

  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';

    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while(data[i]) {
           console.log(data[i]);
           const nombreUsuario = data[i].users.name + ' ' + data[i].users.last_name1 + ' ' + data[i].users.last_name2;
           this.usuarios.push({cedula: data[i].users.id_user, nombre: nombreUsuario + ' - ' + data[i].users.id_user});
           i++;
         }
        });
      }
    });

  

  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any }) {
    console.log('port:', event.value);
  }

  reiniciarValores(){
    this.usuario = new Usuario();
    this.fechaInicio = "";
    this.fehcaFin = "";
    this.inputDosis = "";
    this.inputNombreMedicamento = "";
  }
}

