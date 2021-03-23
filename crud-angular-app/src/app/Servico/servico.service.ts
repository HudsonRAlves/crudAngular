import { Cliente } from './../Modelo/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/clientes/';

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }
}
