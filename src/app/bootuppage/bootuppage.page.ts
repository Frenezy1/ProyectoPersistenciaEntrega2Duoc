import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { IonAvatar,IonModal } from '@ionic/angular';

@Component({
  selector: 'app-bootuppage',
  templateUrl: './bootuppage.page.html',
  styleUrls: ['./bootuppage.page.scss'],
})
export class BootuppagePage implements OnInit {

  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;
  private animation!:Animation;
  constructor(private router: Router, private animationCtrl: AnimationController) { 
  } 


  ngOnInit() {
  }

  ngAfterViewInit()
  {
    this.animation = this.animationCtrl.create()
    .addElement(this.avatar.nativeElement)
    .duration(5000)
    .iterations(Infinity)
    .keyframes([
      {offset:0, opacity:'1'},
      {offset:0.25, opacity:'0.1'},
      {offset:0.50, opacity:'1'},
      {offset:0.75, opacity:'0.1'},
      {offset:1,opacity:'1'},
    ])
    this.animation.play();
  }

}
