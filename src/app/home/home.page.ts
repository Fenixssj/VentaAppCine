import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  username: string = 'guest';
  
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      console.log(`User: ${state['user']}`);
      this.username = state['user'];
    }
  }

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre y Apellido',
    },
    {
      placeholder: 'Tu usuario',
      attributes: {
        maxlength: 12,
      },
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    }
  ];
}

