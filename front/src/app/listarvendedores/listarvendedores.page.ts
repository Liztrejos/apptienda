import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listarvendedores',
  templateUrl: './listarvendedores.page.html',
  styleUrls: ['./listarvendedores.page.scss'],
})
export class ListarvendedoresPage implements OnInit {

  vendedores: any;

  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getVendedores()
  }
  getVendedores(){
  this.apiService.getVendedores().subscribe((data) =>{
      this.vendedores = data;
      console.log(this.vendedores)
  });
  }

}
