import { Component, OnInit, DoCheck, OnChanges} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Almacenaje } from '../../../almacenaje';

class Usuario {
  public cedula: string;
  public nombre: string;
}

@Component({
  selector: 'agregar-recordatorio',
  templateUrl: './agregar-recordatorio.page.html',
  styleUrls: ['./agregar-recordatorio.page.scss'],
})
export class AgregarRecordatorioPage implements OnInit{

  usuarios: Usuario[] = [];
  usuario: Usuario = null;
  id_user = null;
  tipoUsuario = '';
  public date= '';
  public time = '';
  public title = '';
  public desc = '';
  backButton = '';
  public datePickerObj: any = {
  };
  isDisabled:boolean = false;
  allButtonsDisable: number = 0;
  collapseCard: boolean = false;
  public post: any = {color: 'light'};
  num = 0;
  numHex = this.num.toString(16);
  daysOfWeek: number[] = [0, 0, 0, 0, 0, 0, 0];
  public hidePacientes: boolean = false; 

  minDate = new Date().toISOString(); 
  constructor(private almacenaje: Almacenaje) { 
    //this.resetEvent;
    this.datePickerObj = {
      // inputDate: new Date('12'), // If you want to set month in date-picker
      // inputDate: new Date('2018'), // If you want to set year in date-picker
      // inputDate: new Date('2018-12'), // If you want to set year & month in date-picker
      // inputDate: new Date('2018-12-01'), // If you want to set date in date-picker

      // fromDate: new Date('2015-12-20'), // need this in order to have toDate
      // toDate: new Date('2019-12-25'),
      // showTodayButfalseton: ,
      // closeOnSelect: true,
      // disableWeekDays: [],
      // mondayFirst: true,
      setLabel: 'Confirmar',
      todayLabel: 'Hoy',
      closeLabel: 'Cerrar',
      // disabledDates: [],
      titleLabel: "Seleccione una Fecha",
      monthsList: ['01', '02', '03', '04', '04', '06', '07', '08', '09', '10', '11', '12'],
      weeksList: ['D', 'L', 'K', 'M', 'J', 'V', 'S'],
      dateFormat: 'YYYY-MM-DD',
      // clearButton: false,
      momentLocale: 'es',
      yearInAscending: true,
      // btnCloseSetInReverse: false,

      btnProperties: {
        expand: "block", // "block" | "full"
        fill: "", // "clear" | "default" | "outline" | "solid"
        size: "", // "default" | "large" | "small"
        disabled: "", // boolean (default false)
        strong: "", // boolean (default false)
        color: ""
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      }
    };
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
           console.log(data[i]);
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
        console.log(data);
        let i = 0;
        while(data[i]) {
          const nombreUsuario =  data[i].name + ' ' + data[i].last_name1 + ' ' + data[i].last_name2;
          this.usuarios.push({cedula: data[i].id_user, nombre: nombreUsuario + ' - ' + data[i].id_user});
          i++;
        }
      });
      });

  }
  insertarRecordatorio(){
    var data;
    if(this.usuario === undefined){
      alert('Debe seleccionar un paciente');
    }
    else if(this.title.length === 0 || this.desc.length === 0 || this.time.length === 0 ) {
      alert('No se permiten datos vacios');
    }else if(!this.isDisabled){
      if(this.date.length === 0){
        alert('Debe ingresar una fecha');
      }else{
        data = {
        "p_id_user": this.usuario.cedula,
        "p_activity":this.title,
        "p_id_medicine": null,
        "p_id_citation": null,
        "p_day_to_remember":this.date,
        "p_time_to_remember":this.time,
        "p_place":null,
        "p_days_to_remember":null,
        "p_description":this.desc,
        };
      }
    }else{
      data = {
        "p_id_user": this.usuario.cedula,
        "p_activity":this.title,
        "p_id_medicine": null,
        "p_id_citation": null,
        "p_day_to_remember":null,
        "p_time_to_remember":this.time,
        "p_place":null,
        "p_days_to_remember":this.daysOfWeek,
        "p_description":this.desc,
      };
    }
    console.log(data);
    this.insertar(data);
  }

  insertar(data){
    const url = 'https://base-datos-1.herokuapp.com';
    const proc = '/rpc/insert_reminders';
    fetch(url+proc, {
      method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
    }).then(response => {
      if(response.ok){
        alert('Recordatorio agregado con exito');
        this.reiniciarValores();
      } else {
        console.log(response);
        alert('No se logró agregar el recordatorio');
      }
    });
  }
  
  readNotification(posts, id) {
    if (posts.color === "light") {
      posts.color = "tertiary";
      this.isDisabled = true;
      this.allButtonsDisable++;
      const num = 1;
      this.daysOfWeek[id] = 1;
    }else{
      posts.color = "light";
      this.allButtonsDisable--;
      if(this.allButtonsDisable==0){
        this.isDisabled= false;
      }
      this.daysOfWeek[id] = 0;
    }

}

reiniciarValores(){
  this.daysOfWeek = [0,0,0,0,0,0,0];
  this.date = '';
  this.time = '';
  this.title = '';
  this.desc = '';
}


   
  


}
