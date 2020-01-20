import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

class HistorialFamiliar{
  public parentesco: string;
  public nombre: string;
  public enfermedad: string;
  public edad: string;
  public descripcion: string;

}

@Component({
  selector: 'app-ver-historial-familiar',
  templateUrl: './ver-historial-familiar.page.html',
  styleUrls: ['./ver-historial-familiar.page.scss'],
})
export class VerHistorialFamiliarPage implements OnInit {

  historial: HistorialFamiliar[][];

  name: string[];
  idUser = undefined;

  constructor(private almacenaje: Almacenaje) {
    this.almacenaje.get('id_user').then(v => {
        this.idUser = v;
        this.cargarHistorialFamialiar();
    });
  }
  ngOnInit() {
  }


  cargarHistorialFamialiar() {
    const conection = 'http://base-datos-1.herokuapp.com/vfamily_history?id_patient=eq.' + this.idUser;
    this.historial = [];
    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         let j = 0;
         let numeroFila = 0;
         let historialTemporal: HistorialFamiliar[] = [];
         while(data[i]) {
           historialTemporal.push({nombre: data[i].name_family, edad: data[i].age + ' años', parentesco: data[i].name_relationship , enfermedad: 'Enfermedad: '+data[i].name_disease, descripcion: 'Detalle: '+data[i].description});
           j++;
           if(j === 2){
             this.historial[numeroFila] = historialTemporal;
             numeroFila++;
             j = 0;
             historialTemporal = [];
           }
           i++;
         }
         if(j ===1){
           this.historial[numeroFila] = historialTemporal;
         }
        });
      }
    });
  }
}


