import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.page.html',
  styleUrls: ['./pagina-viaje.page.scss'],
})
export class PaginaViajePage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  infoViaje = {
    direccion: "",
    valor: "",
    hora: ""
  }
  ngOnInit() {


    this.activeRoute.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if(state)
      {
        // Aca recibimos y reemplazamos las variables de este user por el recibido en modulo de datos desde user_register.
        this.infoViaje.direccion = state['direccion_viaje'].direccion;
        this.infoViaje.valor = state['direccion_viaje'].valor;
        this.infoViaje.hora = state['direccion_viaje'].hora;
        
        console.log(this.infoViaje); // para confirmar en consola.
      }
      
    })
  }

}
