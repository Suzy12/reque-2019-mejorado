import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-menu-medico',
  templateUrl: './menu-medico.page.html',
  styleUrls: ['./menu-medico.page.scss'],
})
export class MenuMedicoPage implements OnInit {

  constructor(private router: Router, private almacenaje: Almacenaje) { 
  }

  ngOnInit() {
    this.almacenaje.setTipoUsuario('tipo_user', 'medico');
  }

  navigate() {
    this.router.navigate(['/login']);
  }

}
