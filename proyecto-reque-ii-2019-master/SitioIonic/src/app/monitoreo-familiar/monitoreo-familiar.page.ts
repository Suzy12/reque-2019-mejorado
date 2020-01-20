import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

class Usuario {
  public cedula: string;
  public nombre: string;
}

@Component({
  selector: 'app-monitoreo-familiar',
  templateUrl: './monitoreo-familiar.page.html',
  styleUrls: ['./monitoreo-familiar.page.scss'],
})
export class MonitoreoFamiliarPage implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario = null;
  id_user = null;

  constructor(private almacenaje: Almacenaje) { }

  cargarPacientesFamiliar() {
    this.almacenaje.get('id_user').then(v=>{
    this.id_user=v;
    const url = 'http://base-datos-1.herokuapp.com';
    const proc = '/rpc/users_by_family';
    var data = {"id_family":this.id_user};
    fetch(url+proc, {
      method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(data => {
        console.log(data);
        let i = 0;
        while(data[i]) {
          const nombreUsuario =  data[i].name + ' ' + data[i].last_name1 + ' ' + data[i].last_name2;
          this.usuarios.push({cedula: data[i].id_user, nombre: nombreUsuario + ' - ' + data[i].id_user});
          i++;
        }
      });
      });

  }
  locatePaciente(){
    if(this.usuario === undefined){
      alert('Debe elegir un paciente');
    }else{
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/get_location';
    var data = {"p_id_patient":this.usuario.cedula};
    fetch(url+proc, {
      method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
      if(data[0].get_location === null){
        alert('El paciente no tiene una localización');
      }else{
        console.log(data[0].get_location);
        window.open(data[0].get_location, '_blank');
      }
    });
    }
  }

  ngOnInit() {
    this.cargarPacientesFamiliar();
  }

}
