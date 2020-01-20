import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

class Usuario {
  public cedula: string;
  public nombre: string;
}

class Medicamento{
  public nombre: string;
  public fechaIni: string;
  public fechaFin: string;
  public dosis: string;
}

@Component({
  selector: 'app-ver-medicamentos-medico',
  templateUrl: './ver-medicamentos-medico.page.html',
  styleUrls: ['./ver-medicamentos-medico.page.scss'],
})
export class VerMedicamentosMedicoPage implements OnInit {

  usuarios: Usuario[] = [];
  medicamentos: Medicamento[] = [];
  usuario: Usuario;
  listaVisible = false;

  constructor() {
    this.cargarPacientes();
   }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';

    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while(data[i]) {
           const nombreUsuario =  data[i].users.name + ' ' + data[i].users.last_name1 + ' ' + data[i].users.last_name2;
           this.usuarios.push({cedula: data[i].users.id_user, nombre: nombreUsuario + ' - ' + data[i].users.id_user});
           i++;
         }
        });
      }
    });

  }

  ngOnInit() {
  }

  cargarMedicamentos(){
    const conection = 'http://base-datos-1.herokuapp.com/medicines_by_user?id_patient=eq.' + this.usuario.cedula;
    this.medicamentos = [];
    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while(data[i]) {
           this.medicamentos.push({nombre: data[i].name, fechaIni: data[i].date_start, fechaFin: data[i].date_end , dosis: data[i].dose});
           i++;
         }
         this.listaVisible = true;
        });
      }
    });
  }
}
