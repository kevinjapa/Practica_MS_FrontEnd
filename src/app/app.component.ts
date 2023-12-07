import { Component } from '@angular/core';
import { Cliente } from './domain/cliente';
import { ClienteService } from './pages/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practica_MS';

  cliente: Cliente=new Cliente();

  constructor(private clientesService: ClienteService
    ,private router: Router){

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente=new Cliente()
        this.cliente=params['cliente']
      }
  }

  guardar(){
    console.log(this.cliente)
      if(this.cliente.cedula.length==10){
        const regexSoloNumeros: RegExp = /^[0-9]+$/;
        if(regexSoloNumeros.test(this.cliente.cedula) == true){
          this.clientesService.save(this.cliente).subscribe(data => {
            console.log("Resultado WS SAVE", data);
            this.router.navigate(['paginas/listCliente'])
          });
          this.cliente=new Cliente()
          
        }else{
          alert("Cedula invalida")
        }
      }
      else{
        alert("Cedula invalida")
      }
    }
  }
}
