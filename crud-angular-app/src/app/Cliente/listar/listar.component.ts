import { Cliente } from './../../Modelo/Cliente';
import { ServicoService } from '../../Servico/servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes!:Cliente[];
  constructor(private service:ServicoService, private router:Router ) { }

  ngOnInit() {
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
  }

}
