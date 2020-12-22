import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.page.html',
  styleUrls: ['./eliminarproducto.page.scss'],
})
export class EliminarproductoPage implements OnInit {
  codigo:any;
  // nom_producto:any;
  // precio:any;
  proveedores:any;
  productos:any;
  myFlag:Boolean;
  busqueda: Boolean;
  
  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
    
  }

  async mensajeEliminar() {
    const toast = await this.toastController.create({
      message: 'Producto eliminado',
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

  busquedaProveedor(codigo){
    console.log ("Entro a Busqueda");
    this.apiService.getProveedore(codigo).subscribe((data) => {
      this.proveedores = data;
      console.log(this.proveedores);
    });
  }

  buscarproducto(){
    
    this.apiService.getProducto(this.codigo).subscribe((data)=>
    {
      this.productos = data;
      // this.busquedaProveedor(this.codigo);
      this.myFlag = true;
      this.busqueda = true;
      this.mensajeBusqueda();
      console.log(this.productos);
    });
    this.mensajeBusqueda();
    this.myFlag =false;
    
  }
  eliminarproducto(){
    this.apiService.deletProductos(this.codigo).subscribe(()=> {
    });
    this.mensajeEliminar();
    this.myFlag = false;
  }

}
