import { Component, OnInit } from '@angular/core';
import{Geolocation} from '@ionic-native/geolocation/ngx';
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-emergencia-paciente',
  templateUrl: './emergencia-paciente.page.html',
  styleUrls: ['./emergencia-paciente.page.scss'],
})
export class EmergenciaPacientePage implements OnInit {

  id_user = null;

  constructor(private geolocation:Geolocation, private almacenaje: Almacenaje){}
  private mapUrl: string;
  private success(position: Position){
    this.mapUrl='http://maps.google.com/maps?q='+position.coords.latitude+","+position.coords.latitude;
    console.log(this.mapUrl);
  }
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
    this.mapUrl='http://maps.google.com/maps?q='+resp.coords.latitude+","+resp.coords.longitude;
    this.insertarBase();
    console.log(this.mapUrl);
    window.open(this.mapUrl, '_blank');
    }).catch((error) => {
    console.log('Error getting location', error);
  });
  }
  insertarBase(){
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/insert_location';
    this.almacenaje.get('id_user').then(v=>{
      this.id_user=v;
      var data = {"p_id_patient":this.id_user, "location_link":this.mapUrl};
      fetch(url+proc, {
      method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
       }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
          if(response.ok){
          }else{
            alert('Se produjo un problema al guardar la localización');
          }
      });
    });
  }
  ngOnInit(){
  } 

}
