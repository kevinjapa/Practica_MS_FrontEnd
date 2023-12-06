import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  static validarCedula(control: FormControl): {[s: string]: boolean} | null {
    const cedula = control.value;
    if (cedula && cedula.length === 10 && !isNaN(Number(cedula))) {
      return null; // Válido, devuelve null si es correcto
    } else {
      return { 'cedulaInvalida': true }; // Inválido, devuelve un objeto con la clave 'cedulaInvalida'
    }
  }

    // Otras funciones de tu componente...
    // Otras funciones de tu componente...

}
