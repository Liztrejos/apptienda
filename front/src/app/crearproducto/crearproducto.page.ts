import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.page.html',
  styleUrls: ['./crearproducto.page.scss'],
})
export class CrearproductoPage implements OnInit {

  codigo:any;
  nom_producto:any;
  precio:any;
  proveedor:any;
  fecha_entrada:any;

  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  
  async mensajeGuardar() {
    const toast = await this.toastController.create({
      message: 'Creación del producto exitosa',
      duration: 2000
    });
    toast.present();
  }


  agregarProducto(){
    
    let data ={
      codigo:this.codigo,
      nom_producto:this.nom_producto,
      precio:this.precio,
      proveedor:this.proveedor,
      fecha_entrada:this.fecha_entrada
    }

    this.apiService.postProductos(data).subscribe(()=>{
      this.codigo ="",
      this.nom_producto ="",
      this.precio="",
      this.proveedor="",
      this.fecha_entrada=""
      this.mensajeGuardar();
      
    });

  }
}