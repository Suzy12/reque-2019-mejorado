import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Almacenaje } from '../almacenaje';
import { post } from 'selenium-webdriver/http';

class Usuario {
  public cedula: string;
  public nombre: string;
}

class Medicamento {
  public nombre: string;
  public fechaIni: string;
  public fechaFin: string;
  public dosis: string;
}

@Component({
  selector: 'app-medicamentos-familiar-ver',
  templateUrl: './medicamentos-familiar-ver.page.html',
  styleUrls: ['./medicamentos-familiar-ver.page.scss'],
})
export class MedicamentosFamiliarVerPage implements OnInit {

  usuarios: Usuario[] = [];
  medicamentos: Medicamento[] = [];
  usuario: Usuario;
  listaVisible = false;
  idCurrentUser = undefined;
  constructor(private almacenaje: Almacenaje) {
    this.almacenaje.get('id_user').then(v => {
      this.idCurrentUser = v;
      this.cargarPacientes();
    });
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

  cargarMedicamentos() {
    const conection = 'http://base-datos-1.herokuapp.com/medicines_by_user?id_patient=eq.' + this.usuario.cedula;
    this.medicamentos = [];
    fetch(conection).then(response => {
      if (response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while (data[i]) {
           this.medicamentos.push({nombre: data[i].name, fechaIni: data[i].date_start, fechaFin: data[i].date_end , dosis: data[i].dose});
           i++;
         }
         this.listaVisible = true;
        });
      }
    });
  }

  ngOnInit() {
  }

}
