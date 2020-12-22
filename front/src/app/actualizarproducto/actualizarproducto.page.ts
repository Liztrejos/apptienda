import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-actualizarproducto',
  templateUrl: './actualizarproducto.page.html',
  styleUrls: ['./actualizarproducto.page.scss'],
})
export class ActualizarproductoPage implements OnInit {
  codigo:any;
  nom_producto:any;
  precio:any;
  fecha_entrada:any;
  proveedor:any;
  productos:any;
  myFlag:Boolean;
  busqueda: Boolean;

  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  async mensajeActualizar() {
    const toast = await this.toastController.create({
      message: 'Producto actualizado',
      duration: 2000
    });
    toast.present();
  }
  async mensajeBusqueda() {
    if (await(this.busqueda)){
      const toast = await this.toastController.create({
        message: 'Encontro cliente',
        duration: 2000
      });
      
      this.busqueda = false;
      toast.present();
    } else{
      const toast = await this.toastController.create({
        message: 'No Encontro cliente',
        duration: 2000
      });
      toast.present();
    }
    
  }

  buscarProducto(){
    
    this.apiService.getProducto(this.codigo).subscribe((data)=>
    {
      this.productos = data;
      this.myFlag = true;
      this.busqueda = true;
      this.mensajeBusqueda();
      console.log(this.productos);
      
    });
    this.mensajeBusqueda();
    this.myFlag =false;
  }
  // actualizarCliente(){
    
  //   let data ={
  //     nombre:this.nombre,
  //     cedula:this.cedula,
  //     telefono:this.telefono
  //   }
  //   this.apiService.putClientes(this.codigo,data).subscribe(()=> {
  //     this.codigo ="",
  //     this.nombre ="",
  //     this.cedula="",
  //     this.telefono=""
  //   });
  //   this.mensajeActualizar();
  //   this.myFlag = false;
  // }


}
