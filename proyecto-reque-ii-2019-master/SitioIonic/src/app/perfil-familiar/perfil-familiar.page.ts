import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-perfil-familiar',
  templateUrl: './perfil-familiar.page.html',
  styleUrls: ['./perfil-familiar.page.scss'],
})
export class PerfilFamiliarPage implements OnInit {
  
  id_user = undefined;
  Nombre = undefined;
  Parentesco = undefined;

  constructor(private almacenaje:Almacenaje) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.almacenaje.get('id_user').then(v=>{
      this.id_user=v;
      fetch('http://base-datos-1.herokuapp.com/users?id_user=eq.'+this.id_user) //Consulta para obtener los datos del usuario
        .then( response=>{ //
          if(response.status===200){ 
            response.json()
              .then(row=>{ //presuntamente esto deberia de tener una y solo una fila, si no es error de la base
                if(row[0]){
                  this.Nombre = row[0].name + ' ' + row[0].last_name1 + ' ' + row[0].last_name2;
                } //else alert('Error de cuenta');
              })
          } else {
            alert('Error inesperado, pruebe más tarde');
          }
        })
        .catch(error=>{
          alert('Error inesperado')
        });
    });
  }
}
