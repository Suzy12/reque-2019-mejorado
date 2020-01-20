import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoayuda',
  templateUrl: './infoayuda.page.html',
  styleUrls: ['./infoayuda.page.scss'],
})
export class InfoayudaPage implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/login']);
    this.router.navigate(['/informacion']);
  }

  ngOnInit() {
  }

}
