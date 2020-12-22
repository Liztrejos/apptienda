import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly urlApi = "http://localhost:3000/api/clientes"
  cliente;

  readonly urlApiProd = "http://localhost:3000/api/productos"
  producto;

  readonly urlApiProve = "http://localhost:3000/api/proveedores";

  readonly urlApiVendedor = "http://localhost:3000/api/vendedores";

  readonly urlApiVenta = "http://localhost:3000/api/ventas";

  readonly urlApiFact = "http://localhost:3000/api/facturas";

  constructor(private http: HttpClient) { }

  // Clientes HTTP
  getClientes(){
    return this.http.get(this.urlApi);
  }
  getCliente(id:Number){
    return this.http.get(this.urlApi+`/${id}`);
  }
  postClientes(cliente){
    return this.http.post(this.urlApi,cliente);
  }
  putClientes(id:Number, cliente){
    return this.http.put(this.urlApi+`/${id}`, cliente)
  }
  deletClientes(id:Number){
    return this.http.delete(this.urlApi+`/${id}`);
  }

// Producto HTTP
  getProductos(){
    return this.http.get(this.urlApiProd);
  }
  getProducto(id:Number){
    return this.http.get(this.urlApiProd+`/${id}`);
  }
  postProductos(producto){
    return this.http.post(this.urlApiProd,producto);
  }
  putProductos(id:Number, producto){
    return this.http.put(this.urlApiProd+`/${id}`, producto)
  }
  deletProductos(id:Number){
    return this.http.delete(this.urlApiProd+`/${id}`);
  }

  //Proveedores HTTP
  getProveedores(){
    return this.http.get(this.urlApiProve);
  }
  getProveedore(id:Number){
    return this.http.get(this.urlApiProve+`/${id}`);
  }
  //Vendedores HTTP
  getVendedores(){
    return this.http.get(this.urlApiVendedor);
  }
  getVendedor(id:Number){
    return this.http.get(this.urlApiVendedor+`/${id}`);
  }






}


