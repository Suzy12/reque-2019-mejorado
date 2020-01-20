import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Almacenaje } from '../almacenaje';

class Usuario {
  public cedula: string;
  public nombre: string;

}

class Paciente {
  public cedula: string;
  public nombre: string;
  public provincia: string;
  public canton: string;
  public distrito: string;
  public direccionActual: string;
  public fechaNac: string;
  public nivelDeter: string;
  public fechaDiag: string;
  public profesion: string;
  public nivelEsco: string;
  public tipoSangre: string;
  public fechaEstudios: string;
}

class Medicamento {
  public nombre: string;
  public fechaIni: string;
  public fechaFin: string;
  public dosis: string;
}

@Component({
  selector: 'app-familiar-consultar-paciente',
  templateUrl: './familiar-consultar-paciente.page.html',
  styleUrls: ['./familiar-consultar-paciente.page.scss'],
})
export class FamiliarConsultarPacientePage implements OnInit {

  usuarios: Usuario[] = [];
  medicamentos: Medicamento[] = [];
  usuario: Usuario;
  paciente: Paciente;
  mostrarUsuario = false;
  idCurrentUser = undefined;

  constructor(private almacenaje: Almacenaje) { 
    this.almacenaje.get('id_user').then(v => {
      this.idCurrentUser = v;
      this.cargarPacientes();
    });
  }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/rpc/users_by_family';
    const param = {id_family : this.idCurrentUser};
    fetch(conection, {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      if (response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while (data[i]) {
           const nombreUsuario =  data[i].name + ' ' + data[i].last_name1 + ' ' + data[i].last_name2;
           this.usuarios.push({cedula: data[i].id_user, nombre: nombreUsuario + ' - ' + data[i].id_user});
           i++;
         }
        });
      }
    });

  }


  cargarInformacion() {
    if(this.usuario === undefined){
      alert('Debe seleccionar un paciente');
    }else{
    const conection = 'http://base-datos-1.herokuapp.com/rpc/patient_data';
    const param = {p_id_patient : this.usuario.cedula};
    fetch(conection, {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      if (response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
          const nombrePaciente =  data[0].name + ' ' + data[0].last_name1 + ' ' + data[0].last_name2;
          this.paciente = {
                            canton: data[0].canton,
                            direccionActual: data[0].current_address,
                            fechaNac: data[0].date_of_birth,
                            nivelDeter: data[0].deterioration_level,
                            fechaDiag: data[0].diagnosis_date,
                            distrito: data[0].district,
                            nombre: nombrePaciente,
                            profesion: data[0].profession,
                            provincia: data[0].province,
                            nivelEsco: data[0].schooling_level,
                            tipoSangre: data[0].type_blood,
                            fechaEstudios: data[0].year_of_schooling,
                            cedula: this.usuario.cedula
                          };
          this.mostrarUsuario = true;
        });
      }
    });
  }

  }

}
