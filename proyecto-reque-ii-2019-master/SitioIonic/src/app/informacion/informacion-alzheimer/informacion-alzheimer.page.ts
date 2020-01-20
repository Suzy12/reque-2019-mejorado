import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-informacion-alzheimer',
  templateUrl: './informacion-alzheimer.page.html',
  styleUrls: ['./informacion-alzheimer.page.scss'],
})
export class InformacionAlzheimerPage implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/infoayuda']);
  }

  ngOnInit() {
  }

}
