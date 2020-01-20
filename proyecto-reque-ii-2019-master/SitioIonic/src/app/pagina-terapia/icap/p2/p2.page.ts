import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  p2Form = this.fb.group({
    informacion: this.fb.group({
      sexo: [''],
      estatura: [0],
      peso: [0],
      idioma: this.fb.group({
        idioma: [''],
        otro_esp: [""]
      }),
      expresion: this.fb.group({
        expresion: [""],
        alternativo_esp: [""],
        otro_esp: [""]
      }),
      civil: [''],
      legal: this.fb.group({
        legal: [""],
        institucion_esp: [""],
        otro_esp: [""]
      })
    }),
    diagnostica: this.fb.group({
      diagnostico: [""],
      otros: this.fb.group({
        ninguno: [false],
        autismo: [false],
        visual: [false],
        visual_esp: [""],
        auditiva: [false],
        auditiva_esp: [""],
        sordo_ceguera: [false],
        paralisis_cerebral: [false],
        intelectual: [false],
        lesion: [false],
        lesion_esp: [""],
        farmacodependencia:[false],
        salud: [false],
        mental: [false],
        mental_esp: [""],
        mental_situacional: [false],
        mental_situacional_esp: [""],
        epilepsia: [false],
        otro: [false],
        otro_esp: [""]
      })
    }),
    comentarios: [""]
  }); 
  
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }

}
