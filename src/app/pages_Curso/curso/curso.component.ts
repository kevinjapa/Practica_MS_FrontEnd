import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/domain/curso';
import { Docente } from 'src/app/domain/docente';
import { CursoService } from 'src/app/services/curso.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {

  curso: Curso = new Curso();
  docente: Docente = new Docente();

  constructor(private cursosService: CursoService, private docentesService: DocenteService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.curso = new Curso()
      this.curso = params['curso']
    }

    let params2 = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params2){
        console.log(params2)
        this.docente = new Docente()
        this.docente = params2['docente']
      }

  }

  guardar(){
    console.log(this.curso)
    this.curso.docente=this.docente
    this.cursosService.save(this.curso).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.router.navigate(['paginas/Registros'])
    });
    this.curso=new Curso()
    alert("Se agrego correctamente")
  }

}
