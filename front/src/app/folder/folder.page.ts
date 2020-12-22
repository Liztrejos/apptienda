import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  clientes: any;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService 
  ){ }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewDidEnter(){
    this.getClientes()
  }


  //trae los datos de la tabla cliente
  getClientes(){
      this.apiService.getClientes().subscribe((data) =>{
        this.clientes = data;
        console.log(this.clientes)
      });
  }


 

}
