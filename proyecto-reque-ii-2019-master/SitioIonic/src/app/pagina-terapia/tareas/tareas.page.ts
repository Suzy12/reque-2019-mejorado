import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

class Usuario {
  public cedula: string;
  public nombre: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  
  usuarios: Usuario[] = [];
  usuario: Usuario;
  
  terapias = [];
  terapia = {
    fecha:'',paciente:'',lugar:'',descripcion:'',
  }
   
  constructor() { this.cargarPacientes();}
  ngOnInit() {}

  formTerapia(){
    if(this.terapia.fecha == '' || this.terapia.lugar == '' || this.terapia.descripcion == ''){
      alert('No se permiten campos vacios');
      return;
    }
    console.log(this.terapia, this.usuario.cedula);
    this.terapia.paciente = this.usuario.cedula;
    const info = {
      p_id_patient:this.terapia.paciente,
      p_date_therapy:this.terapia.fecha,
      p_place:this.terapia.lugar,
      p_description:this.terapia.descripcion,
    }
    fetch('http://base-datos-1.herokuapp.com/rpc/insert_therapy',{
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(response=>{
      if(response.status===200){
      this.terapias.push({
        fecha: this.terapia.fecha,
        paciente: this.terapia.paciente,
        lugar: this.terapia.lugar,
        descripcion: this.terapia.descripcion,
      });
      this.terapia = {fecha:'',paciente:'',lugar:'',descripcion:'',};
      alert('Terapia agregada exitosamente');
    }
    }).catch(error=>{alert('Error inesperado\nPor favor, espere unos minutos y recarge la pagina')});
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

  cargaTerapias(event: {component: IonicSelectableComponent, value: any}){
    console.log(event.value.cedula);
    this.terapias = [];
    fetch('http://base-datos-1.herokuapp.com/rpc/get_therapies',{
        method: 'POST',
        body: JSON.stringify({p_id_patient:event.value.cedula}),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(response=>{
      if(response.status===200){
        response.json().then(data=>{
          data.forEach(row=>{
            this.terapias.push({
              fecha: row.date_therapy,
              paciente: row.id_patient,
              lugar: row.place,
              descripcion: row.description,
            });
            console.log(row);
          });
        });
      }
    }).catch(error=>{alert('Error inesperado cargando la lista de terapias\nPor favor espere unos minutos e intente de nuevo');});
  }

}
