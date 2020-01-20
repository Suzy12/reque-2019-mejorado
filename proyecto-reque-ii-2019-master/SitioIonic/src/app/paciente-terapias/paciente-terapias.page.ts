import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-paciente-terapias',
  templateUrl: './paciente-terapias.page.html',
  styleUrls: ['./paciente-terapias.page.scss'],
})
export class PacienteTerapiasPage implements OnInit {

  terapias = [];
  constructor(private almacenaje: Almacenaje) {
    
  }

  ionViewWillEnter() {
    this.almacenaje.get('id_user').then(v=>{this.cargaTerapias(v);});
  }
  ngOnInit() {
  }

  cargaTerapias(cedula:any){
    this.terapias = [];
    fetch('http://base-datos-1.herokuapp.com/rpc/get_therapies',{
        method: 'POST',
        body: JSON.stringify({p_id_patient:cedula}),
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
