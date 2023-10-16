import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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
    correo: "",
    fono: ""
  }

  direccion_viaje = {
    direccion: "",
    valor: "$3.490",
    hora: ""
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
        this.user.username = state['user'].usuario;
        this.user.password = state['user'].password;
        this.user.correo = state['user'].correo;
        this.user.fono = state['user'].fono;
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

  // Validacion y match up de credenciales ingresadas
  validarInfo(){
    
    // En caso de coincidir las validaciones, empaquetamos los datos ingresados y se lo enviamos al dashboard
    if((this.direccion_viaje.direccion != " " || this.direccion_viaje.direccion != null)
         ){
   
    //Se crea el navigationExtras para enviar el paquete de informacion
    //A la siguiente pagina que lo deba recibir
    //Para ello empaquetamos nuestra informacion en la variable state
    //que esta incluida en el navigationExtras
      const navigationExtras: NavigationExtras = {
        state: { direccion_viaje: this.direccion_viaje }
      }
      //Enrutamos y enviamos a nuestro nuevo destino
      this.router.navigate(['/pagina-viaje'], navigationExtras);
    }

  else{
    console.log("Error qlo");
  }
}
}
