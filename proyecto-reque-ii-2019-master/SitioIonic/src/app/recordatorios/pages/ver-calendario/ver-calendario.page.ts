import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Almacenaje } from '../../../almacenaje';
import { repeat } from 'rxjs/operators';

class Usuario {
  public cedula: string;
  public nombre: string;
}

@Component({
  selector: 'ver-calendario',
  templateUrl: './ver-calendario.page.html',
  styleUrls: ['./ver-calendario.page.scss'],
})
export class VerCalendarioPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    repeat: ''
  }

  usuarios: Usuario[] = [];
  usuario: Usuario;
  id_user = null;
  tipoUsuario = '';
  hidePacientes: boolean = false; 
  backButton = '';
  dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"];

  dayIndex: number = 0;
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    locale: 'es-CR',
    noEventsLabel: 'No hay eventos',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;
 
  constructor(private almacenaje: Almacenaje, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) {
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
          this.usuario.cedula = v;
          console.log(this.id_user);
          console.log(this.usuario);
          this.load();
        });
      }
    });
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

  getNextDayOfTheWeek(dayName, refDate = new Date()) {
    const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                      .indexOf(dayName.slice(0,3).toLowerCase());
    if (dayOfWeek < 0) return;
    refDate.setDate(refDate.getDate() + 
                    (dayOfWeek + 7 - refDate.getDay()) % 7);
    return refDate.toISOString().slice(0,10);
}

clear(){
  if(this.eventSource.length === 0){
    return;
  }else{
    this.eventSource=[];
  }
}

  load(){
    this.clear();
    if(this.usuario === undefined){
      alert('Debe elegir un paciente');
    }else{
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/get_reminders';
    var data = {"p_id_patient":this.usuario.cedula};
    fetch(url+proc, {
      method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
      let i = 0;
      let j = 0;
      while(data[i]) {
        if(data[i].day_to_remember == null){
          for (let entry of data[i].days_to_remember) {
            if(entry === '0'){
              j++;
            }else{
                const day = this.getNextDayOfTheWeek(this.dayOfWeek[j]);
                this.event.startTime = day+ 'T' + data[i].time_to_remember;
                this.event.endTime = day+ 'T' + data[i].time_to_remember;
                this.event.title = data[i].activity;
                this.event.desc = data[i].description;
                this.event.repeat = 'Se repite.'
                this.addEvent();
                j++;
           }
          }
          j=0;
          
        }else{
          this.event.startTime = data[i].day_to_remember + 'T' + data[i].time_to_remember;
          this.event.endTime = data[i].day_to_remember + 'T' + data[i].time_to_remember;
          this.event.title = data[i].activity;
          this.event.desc = data[i].description;
          this.event.repeat = 'No se repite.'
          console.log(this.event);
          this.addEvent();
        }
        i++;
      }
    this.calendar.currentDate = new Date();
    });
  }
  }


  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      desc: this.event.desc,
      repeat: this.event.repeat
    }
    this.eventSource.push(eventCopy);
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }
   
  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }
   
  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }
   

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
   
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'Hora: ' + start + '<br><br>'+event.repeat,
      buttons: ['OK']
    });
    alert.present();
  }


  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

}
