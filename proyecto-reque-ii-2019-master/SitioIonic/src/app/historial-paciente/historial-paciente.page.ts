import { Component, OnInit } from '@angular/core';
class Usuario {
  public cedula: number;
  public nombre: string;
}

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.page.html',
  styleUrls: ['./historial-paciente.page.scss'],
})
export class HistorialPacientePage implements OnInit {
  usuarios: Usuario[] = [];
  users: any[] = [];
  alergias: any[] = [];
  enfermedades: any[] = [];
  operaciones: any[] = [];
  demencias: any[] = [];
  fechaOperacion;
  descripcionOperacion;
  pacienteOp;
  alergiaOp;
  enfermedadOp;
  operacionOp;
  demenciaOp;
  fechaSeleccionada;
  idOperacionSeleccionado;
  idPacienteSeleccionado;
  idAlergiaSeleccionada;
  ifEnfermedadSeleccionada;
  idDemenciaSeleccionada;
  constructor() { 
    this.cargarPacientes();
    this.cargarAlergias();
    this.cargarEnfermedades();
    this.cargarOperaciones();
    this.cargarDemencias();
    console.log(this.demencias);
  }

  ngOnInit() {
  }
  patientChange(){
    var ced = new String(this.pacienteOp); 
    ced = ced.substr(ced.indexOf("-")+2);
    var id = +ced; 
    this.idPacienteSeleccionado = id;
    console.log(this.pacienteOp);
  }
  allergyChange(){
    console.log(this.alergiaOp);
    var id; 
    let i = 0;
    while (i<this.alergias.length){
      if (this.alergias[i]['name'] === this.alergiaOp){
        this.idAlergiaSeleccionada = this.alergias[i]['id_allergy']
        break;
      }
      i++;
    }
  }
  diseaseChange(){
    let i = 0;
    while (i<this.enfermedades.length){
      if (this.enfermedades[i]['name_disease'] === this.enfermedadOp){
        this.ifEnfermedadSeleccionada = this.enfermedades[i]['id_disease'];
        break
      }
      i++;
    }
    console.log(this.enfermedadOp, this.ifEnfermedadSeleccionada);
  }
  dementiaChange(){
    let i = 0;
    while (i<this.demencias.length){
      if (this.demencias[i]['name_disease'] === this.demenciaOp){
        this.idDemenciaSeleccionada = this.demencias[i]['id_disease'];
        break;
      }
      i++;
    }
    console.log(this.demenciaOp, this.idDemenciaSeleccionada);
  }
  surgeryChange(){
    let i = 0;
    while (i<this.operaciones.length){
      if (this.operaciones[i]['name_operation_type'] === this.operacionOp){
        this.idOperacionSeleccionado = this.operaciones[i]['id_type'];
        break
      }
      i++;
    }
    var date = new String(this.fechaOperacion);
    date = date.substr(0, 10);
    this.fechaSeleccionada = date;
    console.log(this.fechaOperacion);
  }
  cargarOperaciones(){
    const con = 'http://base-datos-1.herokuapp.com/operation_types';
    fetch (con).then(response => {
      if (response.status === 200){
        response.json().then(data => {
          let i=0;
          while (data[i]){
            this.operaciones.push(data[i]);
            i++;
          }
        })
      }
    })
  }
  cargarDemencias(){
    const con = 'http://base-datos-1.herokuapp.com/demential_disease';
    fetch (con).then(response => {
      if (response.status === 200){
        response.json().then(data => {
          let i = 0;
          while (data[i]){
            this.demencias.push(data[i]);
            i++;
          }
        });
      }
    });
  }
  cargarEnfermedades(){
      const con = 'http://base-datos-1.herokuapp.com/disease';
      fetch (con).then(response => {
        if (response.status === 200){
          response.json().then(data => {
            let i = 0;
            while (data[i]){
              this.enfermedades.push(data[i]);
              i++;
            }
          });
        }
      });
  }

  cargarAlergias(){
    const con = 'http://base-datos-1.herokuapp.com/allergies';
    fetch(con).then(response=>{
      if(response.status === 200){
        response.json().then(data => {
          let i = 0;
          while (data[i]){
            //console.log(data[i]);
            this.alergias.push(data[i]);
            // const nombre = data.name;
            // const id = data.id;
            // console.log(nombre, id);
            // let alergia = {id:id, name:nombre};
            // this.alergias.push(alergia);
            i++;
          }
        });
      }
    });
  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';
    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0; 
         while(data[i]) {
           //console.log(data[i]);
           const nombreUsuario = data[i].users.name + ' ' + data[i].users.last_name1 + ' ' + data[i].users.last_name2;
           let user = {name:nombreUsuario, ced:data[i].users.id_user};
           this.users.push(user);
           this.usuarios.push({cedula: data[i].users.id_user, nombre: nombreUsuario + ' - ' + data[i].users.id_user});
           i++;
         }
        });
      }
    });
  }
  insertarAlergia(){
    if (this.idAlergiaSeleccionada !== 0 && this.idPacienteSeleccionado !== 0){
        const x = {p_id_patient:this.idPacienteSeleccionado, p_id_allergy:this.idAlergiaSeleccionada};
        const con = 'http://base-datos-1.herokuapp.com/rpc/insert_patient_allergy';
        fetch(con, {
          method: 'POST',
          body: JSON.stringify(x),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (response.ok){
            alert('Alergia agregada con éxito');
          }
          else{
            console.log(response);
          }
        });
    }
  }
  insertarEnfermedad(){
    if(this.ifEnfermedadSeleccionada !== 0 && this.idPacienteSeleccionado !== 0){
      const con = 'http://base-datos-1.herokuapp.com/rpc/insert_patient_disease';
      const x ={p_id_patient:this.idPacienteSeleccionado, p_id_disease:this.ifEnfermedadSeleccionada};
      fetch(con, {
        method: 'POST',
        body: JSON.stringify(x),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok){
          alert('Enfermedad agregada con éxito');
        }
        else{
          console.log(response);
        }
      });
    }
  }
  insertarOperacion(){
    if(this.idOperacionSeleccionado !== 0 && this.idPacienteSeleccionado !==0 && this.fechaSeleccionada!== null 
      && this.descripcionOperacion !== null){
      const con = 'http://base-datos-1.herokuapp.com/rpc/insert_operation';
      const x = {p_id_patient:this.idPacienteSeleccionado, p_id_type:this.idOperacionSeleccionado, 
        p_date_operation_start:this.fechaSeleccionada, p_date_operation_end:this.fechaSeleccionada, 
        p_description:this.descripcionOperacion};
      fetch(con, {
        method: 'POST',
        body: JSON.stringify(x),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok){
          alert('Enfermedad agregada con éxito');
        }
        else{
          console.log(response);
        }
      });
    }
  }
  insertarDemencia(){
    if(this.idOperacionSeleccionado !== 0 && this.idPacienteSeleccionado !==0 && this.fechaSeleccionada!== null 
      && this.descripcionOperacion !== null){
      const con = 'http://base-datos-1.herokuapp.com/rpc/insert_patient_demential';
      const x = {p_id_patient:this.idPacienteSeleccionado, p_id_demential_disease:this.idDemenciaSeleccionada};
      fetch(con, {
        method: 'POST',
        body: JSON.stringify(x),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok){
          alert('Enfermedad agregada con éxito');
        }
        else{
          console.log(response);
        }
      });
    }
  }
}

