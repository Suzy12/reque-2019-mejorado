import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PreloadingStrategy } from '@angular/router';
import {Almacenaje} from '../almacenaje';

class Usuario {
  public cedula: number;
  public nombre: string;
}

@Component({
  selector: 'app-menu-bitacora-agregar',
  templateUrl: './menu-bitacora-agregar.page.html',
  styleUrls: ['./menu-bitacora-agregar.page.scss'],
})
export class MenuBitacoraAgregarPage implements OnInit  {
  
  inputUser = 0;
  date = Date();
  note = '';

  usuarios: Usuario[] = [];
  usuario: Usuario;

  constructor(private almacenaje:Almacenaje) {
    this.almacenaje.get('id_user').then(v=>{
      this.inputUser=v;
      this.cargarPacientes(); 
    })
  }

  ngOnInit() {
  }

  agregarBitacora() {
    if(this.note.length === 0 ||  this.usuario === null || this.date.length === 0 ) {
      alert('No se permiten datos vacios');
    }
    else{
      const bitacorabyuser = {
        p_id_user_creator: this.inputUser,
        p_id_patient:this.usuario.cedula,
        p_date_binnacle : this.date,
        p_description : this.note,
      };

  
      const conection = 'http://base-datos-1.herokuapp.com/rpc/insert_binnacle';
  
      fetch(conection, {
        method: 'POST',
        body: JSON.stringify(bitacorabyuser),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if(response.ok){
          alert('Bitácora agregada con éxito');
          this.reiniciarValores();
        } else {
          console.log(response);
          alert('No se logró agregar la bitácora');
        }
      });
    }

  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';
   //const conection  = 'http://base-datos-1.herokuapp.com/rpc/users_by_family' 
    //para  juntar  los pacientes relacionados con un familiar, para la bitacora familiar
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
    this.date,
    this.note
  }
}