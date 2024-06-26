import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
    },
    {
      title: 'Membres',
      url: '/membres',
    },
    {
      title: 'Aides',
      url: '/aides',
    },
    {
    title: 'Prêts',
    url: '/prets',
    },
    {
      title: 'Depenses',
      url: 'depenses',
    },
    {
      title: 'Fond de caisses',
      url: 'fond-caisses',
    },
    {
      title: 'Sanctions',
      url: '/sanctions',
    },
    {
      title: 'Etat de caisse',
      url: 'etat-caisse',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Règles',
      url: '/rules',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
