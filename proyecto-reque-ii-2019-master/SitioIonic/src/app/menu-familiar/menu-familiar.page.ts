import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-menu-familiar',
  templateUrl: './menu-familiar.page.html',
  styleUrls: ['./menu-familiar.page.scss'],
})
export class MenuFamiliarPage implements OnInit {

  constructor(private router: Router, private almacenaje: Almacenaje) { }

  ngOnInit() {
    this.almacenaje.setTipoUsuario('tipo_user', 'familiar');
  }

  navigate() {
    this.router.navigate(['/bitacora-familiar']);
    this.router.navigate(['/login']);
    this.router.navigate(['recordatorios']);
  }

}
