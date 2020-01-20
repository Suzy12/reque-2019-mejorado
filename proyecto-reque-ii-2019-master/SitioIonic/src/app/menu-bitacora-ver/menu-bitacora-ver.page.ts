
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import {Almacenaje} from '../almacenaje';

class Usuario {
  public cedula: number;
  public nombre: string;
}

@Component({
  selector: 'app-menu-bitacora-ver',
  templateUrl: './menu-bitacora-ver.page.html',
  styleUrls: ['./menu-bitacora-ver.page.scss'],
})
export class MenuBitacoraVerPage implements OnInit {

  inputUser = 0;
  inputNombrePaciente = '';
  inputPaciente = '';
  inputFecha = Date();
  inputNota = '';

  usuarios: Usuario[] = [];
  usuario: Usuario;
  arrayBitacoras = [];

  constructor(private almacenaje: Almacenaje) 
  {
    this.almacenaje.get('id_user').then(v => {
      this.inputUser = v;
      this.cargarPacientes();
    })
  }

  ngOnInit() {
  }

  cargarBitacora() {
    if (this.usuario === undefined) {
      alert('No se permiten datos vacios');
    }
    else {
      const bitacorabyuser = {
        p_id_patient: this.usuario.cedula
      };


      const conection = 'http://base-datos-1.herokuapp.com/rpc/get_binnacles';

      fetch(conection, {
        method: 'POST',
        body: JSON.stringify(bitacorabyuser),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          this.arrayBitacoras = [];
          response.json()
            .then(data => {
              let i = 0;
              while (data[i]) {
                console.log(data[i]);
                this.arrayBitacoras.push({
                  date: data[i].date_binnacle.slice(0, -9), description: data[i].description,
                  last_name1: data[i].last_name1, last_name2: data[i].last_name2, name: data[i].name
                })
                i++;
              }
            });
        } else {
          console.log(response);
          alert('No se logró cargar la bitácora');
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
    value: any
  }) {
    console.log('port:', event.value);
  }

  reiniciarValores() {
    this.usuario = new Usuario();
    this.inputNombrePaciente,
      this.inputFecha,
      this.inputNota
  }
}

