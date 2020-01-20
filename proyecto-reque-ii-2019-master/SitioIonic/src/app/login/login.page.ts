import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Almacenaje } from '../almacenaje';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  inputUser: string = "";
  inputPassword: string = "";
  
  constructor(private router: Router, public almacenaje: Almacenaje) {}

  ngOnInit() {
  }
  
  clickBoton(){
    /*
      Al Hail to FETCH API, our new god
     */
    console.log(this.inputUser,this.inputPassword);
    let conection = 'http://base-datos-1.herokuapp.com/users?select=id_user&nickname=eq.'+this.inputUser+'&password_user=eq.'+this.inputPassword;
    fetch(conection)
      .then(response=>{
        if(response.status===200){
          response.json()
            .then(data=>{
              if(!data[0])  alert('Usuario o contraseña incorrecto');
              else {
                fetch('http://base-datos-1.herokuapp.com/role_by_user?id_user=eq.'+data[0].id_user)
                  .then( response=>{
                    if(response.status===200){
                      response.json()
                        .then(tipo=>{ //presuntamente esto deberia de tener una y solo una fila, si no es error de la base
                          this.almacenaje.set('id_user',data[0].id_user);
                          if(tipo[0].id_role == 1) this.router.navigate(['/menu/paciente']);
                          else if(tipo[0].id_role == 2 || tipo[0].id_role == 3 ) this.router.navigate(['/menu/medico']);
                          else if(tipo[0].id_role == 4 || tipo[0].id_role == 5 ) this.router.navigate(['/menu/familiar']);
                          else {
                            alert('Error de Inicio de Sesion\nPruebe con una cuenta diferente');
                            this.almacenaje.set('id_user',undefined);
                          }
                        })
                    } else {
                      alert('Error inesperado, pruebe más tarde');
                    }
                  })
                  .catch(error=>{
                    alert('Error inesperado')
                  })
              }
            });
        }
      })
      .catch(error=>{alert('Oh no...\nhizo click...\nOh no....\n'+error)});
  }
}
