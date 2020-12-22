import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.page.html',
  styleUrls: ['./listarproducto.page.scss'],
})
export class ListarproductoPage implements OnInit {
  public folder: string;

  productos:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService 
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewDidEnter(){
    this.getProductos()
  }
  getProductos(){
  this.apiService.getProductos().subscribe((data) =>{
    this.productos = data;
    console.log(this.productos)
  });
}
}
