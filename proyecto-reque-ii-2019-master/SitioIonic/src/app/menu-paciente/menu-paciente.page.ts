import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-menu-paciente',
  templateUrl: './menu-paciente.page.html',
  styleUrls: ['./menu-paciente.page.scss'],
})

export class MenuPacientePage implements OnInit {
  
  constructor(private router:Router, private almacenaje: Almacenaje) { 
  }
  
  ngOnInit() {
    this.almacenaje.setTipoUsuario('tipo_user', 'paciente');
    
  }
  
  navigate() {
    this.router.navigate(['/login']);
    this.router.navigate(['/paciente/perfil']);
    //this.router.navigate(['/recordatorios/menu']);
    
  }



  
}
