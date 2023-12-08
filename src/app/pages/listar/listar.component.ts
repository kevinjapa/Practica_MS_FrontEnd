import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Curso } from 'src/app/domain/curso';
import { Docente } from 'src/app/domain/docente';
import { ClienteService } from 'src/app/services/cliente.service';
import { CursoService } from 'src/app/services/curso.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit{

  listadoClientesWS: any;
  cliente: Cliente =new Cliente();

  listadoDocentesWS: any;
  docentes: Docente =new Docente();

  listadoCursosWS: any;
  cursos: Curso =new Curso();

  constructor(private clienteSerivce: ClienteService, private docenteService: DocenteService, private cursoService: CursoService, private router: Router) {

      this.listadoClientesWS=clienteSerivce.getAll();
      console.log('Listado de Contactos',this.listadoClientesWS)

      this.listadoDocentesWS=docenteService.getAll();
      console.log('Listado de Docentes',this.listadoDocentesWS)

      this.listadoCursosWS=cursoService.getAll();
      console.log('Listado de Cursos',this.listadoCursosWS)

  }

  ngOnInit():void{
    this.listadoClientesWS=this.clienteSerivce.getAll();
    this.listadoDocentesWS=this.docenteService.getAll();
    this.listadoCursosWS=this.cursoService.getAll();
  }
}
