import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-familiar',
  templateUrl: './historial-familiar.page.html',
  styleUrls: ['./historial-familiar.page.scss'],
})
export class HistorialFamiliarPage implements OnInit {

  constructor() { }
  info = {titulo:'', parentezco:'', descripcion:''};
  logForm() {
    let dia = new Date().getDate();
    let mes = new Date().getUTCMonth()+1;
    let anho= new Date().getFullYear();
    this.info["dia"] = dia;
    this.info["mes"] = mes;
    this.info["anho"] = anho;
    console.log(this.info);
  }
  ngOnInit() {
  }

}
