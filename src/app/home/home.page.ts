import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar, IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import {ToastController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonAvatar, { read: ElementRef }) avatar!: ElementRef<HTMLIonAvatarElement>;

  @ViewChild(IonModal) modal!: IonModal;

  private animation!: Animation;
  
  constructor(private router: Router, 
              private animationCtrl: AnimationController,
              public toastController: ToastController, 
              private auth: AutenticacionService) { }

  public mensaje = "";
  public estado: String = "";
  name!: string;
  

  public alertButtons = ['OK'];

  ngAfterViewInit() {
    
  }

  user = {
    usuario: "",
    password: "",
    correo: "",
    fono: ""
  }


  enviarInformacion() {
    this.auth.login(this.user.usuario, this.user.password).then(() => {
      if (this.auth.autenticado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/dashboard'], navigationExtras); // '/login' originalmente
      } else {
        this.presentToast1();
      }
    });
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // regex en c
    const phonePattern = /^\+569\d{8}$/

    if(emailPattern.test(this.user.correo) && phonePattern.test(this.user.fono))
    {
      
      this.auth.register(this.user.usuario, this.user.password).then((res) => {
        if (res) {
          this.estado = "Usuario Existente";
        } else {
          this.mensaje = "Registro Exitoso";
          this.modal.dismiss(this.user.usuario, 'confirm');
         
         this.presentToastConfirm();
        }
      })
    }
    else {
      this.presentToastDataFailed();
    }
  }

  // FUNCIONES DE TOAST 
  
  //****************************************/
  //   TOASTS                              */
  /**************************************** */
  async presentToast1()
  { 
    const toast = await this.toastController.create({ // declaramos las variables del Toast
      message: 'Credenciales ingresadas no válidas, vuelva a intentar.',
      duration: 1000,
      position: "bottom"
  });
    toast.present() // con esto presentamos el toast
  }

  hide = true;
  ngOnInit() {
  }
  
  async presentToastConfirm()
  { 
    const toast = await this.toastController.create({ // declaramos las variables del Toast
      message: 'Usuario registrado con éxito!',
      duration: 500,
      position: "bottom"
  });
    toast.present() // con esto presentamos el toast
  }

  async presentToastDataFailed()
  { 
    const toast = await this.toastController.create({ // declaramos las variables del Toast
      message: 'Datos ingresados no válidos, vuelva a intentar.',
      duration: 500,
      position: "bottom"
  });
    toast.present() // con esto presentamos el toast
  }

}
