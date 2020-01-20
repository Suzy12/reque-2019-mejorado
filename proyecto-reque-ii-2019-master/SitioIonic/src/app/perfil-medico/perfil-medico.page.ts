import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.page.html',
  styleUrls: ['./perfil-medico.page.scss'],
})
export class PerfilMedicoPage implements OnInit {

  id_user = undefined;
  Nombre = undefined;
  Specialty = undefined;
  Specialtyid = undefined;
  Role = "";

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
                  //this.Specialtyid = row[0].specialty;
                  fetch('http://base-datos-1.herokuapp.com/role_by_user?id_user=eq.'+this.id_user) //Consulta para obtener los datos del usuario
                    .then( response=>{ //
                      if(response.status===200){ 
                        response.json()
                          .then(row=>{ //presuntamente esto deberia de tener una y solo una fila, si no es error de la base
                            if(row[0]){
                              if(row[0].id_role==2){ //medico
                                this.Role = "Medico";
                                /* Esta tabla ya no existe en la base
                                fetch('http://base-datos-1.herokuapp.com/specialty?idspecialty=eq.'+this.Specialtyid)
                                  .then(sp=>{if(sp.status===200){sp.json().then(data=>{
                                    if(this.Specialtyid && data[0]){
                                      this.Specialty = data[0].specialtyname;
                                    } else {
                                      this.Specialty = "";
                                    }
                                  })}}).catch(error=>alert(error));
                                */
                              } else if(row[0].idrole==3){
                                this.Role = "Terapeuta";
                                /* Vease comantario previo
                                fetch('http://base-datos-1.herokuapp.com/typetherapist?idtype=eq.'+this.Specialtyid)
                                  .then(sp=>{if(sp.status===200){sp.json().then(data=>{
                                    if(this.Specialtyid && data[0]){
                                      this.Specialty = data[0].specialtyname;
                                    } else {
                                      this.Specialty = "";
                                    }
                                  })}});
                                */
                              }
                            } //else alert('Error de cuenta');
                          })
                      } else {
                        alert('Error inesperado, pruebe más tarde');
                      }
                    })
                    .catch(error=>{
                      alert('Error inesperado')
                    });
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
