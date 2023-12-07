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

}
