import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { 


  }
  
  user = {
    username: "",
    password: "",
    fono: "",
    email: ""
  }

  
  mensaje_pasajero = "Buscar conductor";
  mensaje_conductor = "Buscar pasajeros"
  mensaje_general = this.mensaje_pasajero;

  ngOnInit() {

    // Primero verificamos el estado de las variables a utilizar.
    // Generamos una variable state que reciba el state actual de la navegacion.
    // getCurrentNavigation()? lleva "?" ya que consulta e indica posibilidad de 
    // Tomamos el state y comprobamos su contenido
    // Si el contenido existe, reemplazamos nuestro user actual.

    this.activeRoute.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if(state)
      {
        // Aca recibimos y reemplazamos las variables de este user por el recibido en modulo de datos desde user_register.
        this.user.username = state['user_register'].username;
        this.user.password = state['user_register'].password;
        this.user.fono = state['user_register'].fono;
        this.user.email = state['user_register'].email;
        console.log(this.user); // para confirmar en consola.
      }

    })
  }

  switchPasajeroButton()
  {
    this.mensaje_general = this.mensaje_pasajero;
  }

  switchConductorButton()
  {
    this.mensaje_general = this.mensaje_conductor;
  }

}
