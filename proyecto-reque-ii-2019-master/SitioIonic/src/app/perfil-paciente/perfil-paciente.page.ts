import { Component, OnInit } from '@angular/core';
import { Almacenaje } from '../almacenaje';


@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.page.html',
  styleUrls: ['./perfil-paciente.page.scss'],
})
export class PerfilPacientePage implements OnInit {
  
  id_user = undefined;
  Nombre = undefined;
  Nacimiento = undefined;
  Profession = "";
  PlaceOfOrigin = "";
  CurrentAddress = "";
  lenguas = [];
  intereses = [];
  disgustos = [];

  constructor(private almacenaje:Almacenaje) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.almacenaje.get('id_user').then(v=>{
      this.id_user=v;
      console.log(this.id_user);
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
          alert('Error recuperando la informacion\nPueden haber datos incompletos\nPor favor, espere unos minutos y pruebe de nuevo');
        });
      fetch('http://base-datos-1.herokuapp.com/patients?id_patient=eq.'+this.id_user) //Consulta para obtener los datos del usuario
        .then( response=>{ //
          if(response.status===200){ 
            response.json()
              .then(row=>{ //presuntamente esto deberia de tener una y solo una fila, si no es error de la base
                if(row[0]){
                  this.Nacimiento = row[0].date_of_birth;
                  this.Profession = row[0].profession;
                  this.PlaceOfOrigin = row[0].place_of_origin;
                  this.CurrentAddress = row[0].current_address;
                } //else alert('Error de cuenta');
              })
          } else {
            alert('Error inesperado, pruebe más tarde');
          }
        })
        .catch(error=>{
          alert('Error recuperando la informacion\nPueden haber datos incompletos\nPor favor, espere unos minutos y pruebe de nuevo.');
        });
      fetch('http://base-datos-1.herokuapp.com/patient_languages?id_patient=eq.'+this.id_user+'&select=*,languages(name_language)')
        .then(response=>{if(response.status===200){response.json().then(data=>{
          data.forEach(row=>{
            this.lenguas.push({name:row.languages.name_language,level:row.domain_level,native:(row.is_native==0?"":"nativo")});
          });
        })}})
        .catch(error=>{
          alert('Error recuperando la informacion\nPueden haber datos incompletos\nPor favor, espere unos minutos y pruebe de nuevo\n'+error);
        });
      fetch('http://base-datos-1.herokuapp.com/interest?id_patient=eq.'+this.id_user)
        .then(response=>{if(response.status===200){response.json().then(data=>{
          data.forEach(row=>{
            if(row.is_interested==1) this.intereses.push(row.description);
            else this.disgustos.push(row.description);
          });
        })}})
        .catch(error=>{
          alert('Error recuperando la informacion\nPueden haber datos incompletos\nPor favor, espere unos minutos y pruebe de nuevo\n'+error);
        });
    });
  }
}
