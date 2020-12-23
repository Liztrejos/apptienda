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
        message: 'Encontro producto',
        duration: 2000
      });
      
      this.busqueda = false;
      toast.present();
    } else{
      const toast = await this.toastController.create({
        message: 'No Encontro producto',
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
  actualizarProducto(){
    
    let data ={
      nom_producto:this.nom_producto,
      precio:this.precio,
      fecha_entrada:this.fecha_entrada,
      proveedor: this.proveedor
    }
    this.apiService.putProductos(this.codigo,data).subscribe(()=> {
      this.codigo ="",
      this.nom_producto ="",
      this.precio="",
      this.fecha_entrada="",
      this.proveedor = ""
    });
    this.mensajeActualizar();
    this.myFlag = false;
  }


}
