import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Clientes',
      url: '/folder/Inbox',
      icon: 'people'
    },
    {
      title: 'Crear clientes',
      url: '/crearcliente/',
      icon: 'person-add'
    },
    {
      title: 'Actualizar Cliente',
      url: '/actualizarcliente/',
      icon: 'reload'
    },
    {
      title: 'Eliminar cliente',
      url: '/eliminarcliente/',
      icon: 'trash'
    },
    
    {
      title: 'Productos',
      url: '/listarproducto/',
      icon: 'cart'
    },
    {
      title: 'Crear productos',
      url: '/crearproducto/',
      icon: 'pricetag'
    },
    {
      title: 'Actualizar Producto',
      url: '/actualizarproducto/',
      icon: 'reload'
    },
    {
      title: 'Eliminar producto',
      url: '/eliminarproducto/',
      icon: 'trash'
    },
    {
      title: 'Vendedores',
      url: '/listarvendedores/',
      icon: 'walk'
    },

    {
      title: 'Proveedores',
      url: '/listarproveedores/',
      icon: 'people-circle'
    }

  
  
  ];
 

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
