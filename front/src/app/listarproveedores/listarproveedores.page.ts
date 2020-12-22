import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listarproveedores',
  templateUrl: './listarproveedores.page.html',
  styleUrls: ['./listarproveedores.page.scss'],
})
export class ListarproveedoresPage implements OnInit {
  
  proveedores:any;
  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiService ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getProveedor()
  }
  getProveedor(){
  this.apiService.getProveedores().subscribe((data) =>{
    this.proveedores = data;
    console.log(this.proveedores)
  });
}
}
