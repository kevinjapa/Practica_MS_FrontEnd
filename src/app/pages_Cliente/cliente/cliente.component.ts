import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(private clientesService: ClienteService,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente = new Cliente()
        this.cliente = params['cliente']
      }
    }

    guardar(){
      console.log(this.cliente)
      this.clientesService.save(this.cliente).subscribe(data => {
        console.log("Resultado WS SAVE", data);
        this.router.navigate(['paginas/listCliente'])
      });
      this.cliente=new Cliente()
    }

}
