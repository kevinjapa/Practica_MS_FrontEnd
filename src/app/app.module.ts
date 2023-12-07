import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages_Cliente/cliente/cliente.component';
import { DocenteComponent } from './pages_Docente/docente/docente.component';
import { CursoComponent } from './pages_Curso/curso/curso.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarComponent } from './pages/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DocenteComponent,
    CursoComponent,
    InicioComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
