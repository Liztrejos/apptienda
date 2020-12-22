import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.page.html',
  styleUrls: ['./crearcliente.page.scss'],
})
export class CrearclientePage implements OnInit {

  codigo:any;
  nombre:any;
  cedula:any;
  telefono:any;

  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
  }


  async mensajeGuardar() {
    const toast = await this.toastController.create({
      message: 'Creación del cliente exitosa',
      duration: 2000
    });
    toast.present();
  }


  agregarCliente(){
    
    let data ={
      codigo:this.codigo,
      nombre:this.nombre,
      cedula:this.cedula,
      telefono:this.telefono
    }

    this.apiService.postClientes(data).subscribe(()=>{
      this.codigo ="",
      this.nombre ="",
      this.cedula="",
      this.telefono=""
      this.mensajeGuardar();
      
    });
  }
}