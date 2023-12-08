import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit{

  listadoClientesWS: any;
  cliente: Cliente =new Cliente();

  constructor(private clienteSerivce: ClienteService,
    private router: Router
    ){

      this.listadoClientesWS=clienteSerivce.getAll();
      console.log('Listado de Contactos',this.listadoClientesWS)

  }

  ngOnInit():void{
    this.listadoClientesWS=this.clienteSerivce.getAll();
  }
}
