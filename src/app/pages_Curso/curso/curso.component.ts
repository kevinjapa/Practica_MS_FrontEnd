import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/domain/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {

  curso: Curso = new Curso();

  constructor(private cursosService: CursoService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.curso = new Curso()
      this.curso = params['curso']
    }
  }

  guardar(){
    console.log(this.curso)
    this.cursosService.save(this.curso).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.router.navigate(['paginas/listCliente'])
    });
    this.curso=new Curso()
    alert("Se agrego correctamente")
  }

}
