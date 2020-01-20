import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

class Medicamento{
  public nombre: string;
  public fechaIni: string;
  public fechaFin: string;
  public dosis: string;
}

@Component({
  selector: 'app-ver-medicinas',
  templateUrl: './ver-medicinas.page.html',
  styleUrls: ['./ver-medicinas.page.scss'],
})



export class VerMedicinasPage implements OnInit {
  iduser = undefined;
  medicamentos: Medicamento[][];
  

  constructor(private almacenaje: Almacenaje) {
        this.cargarMedicamentos();

    }

  ngOnInit() {
  }

  cargarMedicamentos(){
    this.almacenaje.get('id_user').then(v => {
    this.iduser = v;
    const conection = 'http://base-datos-1.herokuapp.com/medicines_by_user?id_patient=eq.' + this.iduser;
    this.medicamentos = [];
    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         let j = 0;
         let numeroFila = 0;
         let medicamentosTemporal = [];
         while(data[i]) {
           medicamentosTemporal.push({nombre: data[i].name, fechaIni: data[i].date_start, fechaFin: data[i].date_end , dosis: data[i].dose});
           j++;
           if(j === 2){
             this.medicamentos[numeroFila] = medicamentosTemporal;
             numeroFila++;
             j = 0;
             medicamentosTemporal = [];
           }
           i++;
         }
         if(j ===1){
           this.medicamentos[numeroFila] = medicamentosTemporal;
         }
        });
      }
    });

  });

  }

}
