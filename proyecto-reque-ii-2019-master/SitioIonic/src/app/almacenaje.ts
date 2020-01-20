import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: "root",
})
export class Almacenaje {

  constructor(private storage: Storage){ }

  set(tipo, value){
    this.storage.set(tipo,value);
  }
  get(tipo){
    return this.storage.get(tipo);
  }

  setTipoUsuario(tipoUser, value){
    this.storage.set(tipoUser, value);
  }

  getTipoUsuario(tipoUser){
    return this.storage.get(tipoUser);
  }
  
}
