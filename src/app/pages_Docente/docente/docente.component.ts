import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/domain/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent {

  docente: Docente = new Docente();

  constructor(private docentesService: DocenteService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.docente = new Docente()
      this.docente = params['docente']
    }
  }

  guardar(){
    console.log(this.docente)
    this.docentesService.save(this.docente).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.router.navigate(['paginas/listCliente'])
    });
    this.docente=new Docente()
    alert("Se agrego correctamente")
  }

}
