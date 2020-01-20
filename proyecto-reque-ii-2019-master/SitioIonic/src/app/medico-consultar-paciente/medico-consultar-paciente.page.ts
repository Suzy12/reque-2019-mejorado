import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

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
  selector: 'app-medico-consultar-paciente',
  templateUrl: './medico-consultar-paciente.page.html',
  styleUrls: ['./medico-consultar-paciente.page.scss'],
})
export class MedicoConsultarPacientePage implements OnInit {

  usuarios: Usuario[] = [];
  medicamentos: Medicamento[] = [];
  usuario: Usuario;
  paciente: Paciente;
  mostrarUsuario = false;

  constructor() { }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';

    fetch(conection).then(response => {
      if (response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while (data[i]) {
           const nombreUsuario =  data[i].users.name + ' ' + data[i].users.last_name1 + ' ' + data[i].users.last_name2;
           this.usuarios.push({cedula: data[i].users.id_user, nombre: nombreUsuario + ' - ' + data[i].users.id_user});
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
