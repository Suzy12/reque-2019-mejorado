import { Component, ViewChild, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { Almacenaje } from '../../../almacenaje';
import * as moment from "moment"; 
import { NavController } from 'ionic-angular';
import { SessionDetailPage } from '../session-detail/session-detail';

class Usuario {
  public cedula: string;
  public nombre: string;
}


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit{
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  @ViewChild('nav', { static: true }) nav: NavController;

  usuarios: Usuario[] = [];
  usuario: Usuario;
  ios: boolean;
  dayIndex: number = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  days: any = [];
  shownSessions: number = 0;
  confDate: string;
  id_user = null;
  tipoUsuario = '';
  hidePacientes: boolean = false; 
  backButton = '';
  dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"];

  constructor(
    private almacenaje: Almacenaje,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public config: Config
  ) { 
  }

  ngOnInit() {
    this.almacenaje.getTipoUsuario('tipo_user').then(v=>{
      this.tipoUsuario = v;
      if(v.match('familiar')){
        this.backButton = "/menu/familiar";
        this.cargarPacientesFamiliar();
      }else if(v.match('medico')){
        this.backButton = "/menu/medico";
        this.cargarPacientes();
      }else if(v.match('paciente')){
        this.backButton = "/menu/paciente";
        this.hidePacientes = true;
        this.almacenaje.get('id_user').then(v=>{
          this.id_user=v;
          this.usuario = new Usuario();
          this.usuario.cedula = this.id_user;
          this.updateSchedule();
        });
      }
    });
    this.ios = this.config.get('mode') === 'ios';
  }

  cargarPacientes() {
    const conection = 'http://base-datos-1.herokuapp.com/role_by_user?id_role=eq.1&select=users(id_user,name,last_name1,last_name2)';

    fetch(conection).then(response => {
      if(response.status === 200) {  // 200=>conexion lograda y correcta
        response.json() // parse como json
        .then(data => {
         let i = 0;
         while(data[i]) {
           const nombreUsuario = data[i].users.name + ' ' + data[i].users.last_name1 + ' ' + data[i].users.last_name2;
           this.usuarios.push({cedula: data[i].users.id_user, nombre: nombreUsuario + ' - ' + data[i].users.id_user});
           i++;
         }
        });
      }
    });
  }
  

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
        let i = 0;
        while(data[i]) {
          const nombreUsuario =  data[i].name + ' ' + data[i].last_name1 + ' ' + data[i].last_name2;
          this.usuarios.push({cedula: data[i].id_user, nombre: nombreUsuario + ' - ' + data[i].id_user});
          i++;
        }
      });
      });

  }

  clear(){
    if(this.days.length === 0){
      return;
    }else{
      this.days = [];
    }
  }

  getNextDayOfTheWeek(dayName, refDate = new Date()) {
    const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                      .indexOf(dayName.slice(0,3).toLowerCase());
    if (dayOfWeek < 0) return;
    refDate.setDate(refDate.getDate() + 
                    (dayOfWeek + 7 - refDate.getDay()) % 7);
    return refDate.toISOString().slice(0,10);
  }


  updateSchedule() {
    this.clear();
    if(this.usuario === undefined){
      alert('Debe elegir un paciente');
    }else{
    const today = moment().format("YYYY-MM-DD");
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/get_reminders';
    var data = {"p_id_patient":this.usuario.cedula,"date_begin":today};
    fetch(url+proc, {
      method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
      let i = 0;
      let j = 0;
      var fechaRepeat = false;
      while(data[i]) {
        if(data[i].day_to_remember == null){
          j=0;
          for (let entry of data[i].days_to_remember) {
            if(entry === '0'){
              j++;
            }else{
                const dayW = this.getNextDayOfTheWeek(this.dayOfWeek[j]);
                var grupo = {
                  name: data[i].activity,
                  description: data[i].description,
                  timeStart: data[i].time_to_remember,
                  tracks: 'doc',
                  id: i,
                  repeat: 'Se repite.'
                };
                j++;
                for(let dday of this.days){
                  if(dday.date.match(dayW)){
                    dday.groups.push(grupo);
                    this.shownSessions += 1;
                    fechaRepeat = true;
                  }
                }if(!fechaRepeat){
                  this.days.push({"date": dayW, "groups": [grupo]});
                  this.shownSessions += 1;
                }
                fechaRepeat = false;
           }
          }
          j=0;
        }else{
          var grupo = {
            name: data[i].activity,
            description: data[i].description,
            timeStart: data[i].time_to_remember,
            tracks: 'doc',
            id: i,
            repeat: 'No se repite.'
          };
          if(this.days.length === 0){
            this.days.push({"date": data[i].day_to_remember, "groups": [grupo]});
          }else{
            for(let dday of this.days){
              if(dday.date.match(data[i].day_to_remember)){
                console.log('h');
                dday.groups.push(grupo);
                this.shownSessions += 1;
                fechaRepeat = true;
              }
            }if(!fechaRepeat){
              this.days.push({"date": data[i].day_to_remember, "groups": [grupo]});
              this.shownSessions += 1;
            }
            fechaRepeat = false;
          }
        }
        i++;
      }
      this.days.sort(this.predicateBy("date") );
    });
    }
  }

  predicateBy(prop){
    return function(a,b){
       if (a[prop] > b[prop]){
           return 1;
       } else if(a[prop] < b[prop]){
           return -1;
       }
       return 0;
    }
 }

  async onEventSelected(title,desc,start,repeat) {
   
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: desc,
      message: 'De: ' + start + '<br><br>'+ repeat,
      buttons: ['OK']
    });
    alert.present();
  }

  go() {
    this.router.navigateByUrl('session/:sessionId');
  }

}
