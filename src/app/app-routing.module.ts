import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages_Cliente/cliente/cliente.component';
import { DocenteComponent } from './pages_Docente/docente/docente.component';
import { CursoComponent } from './pages_Curso/curso/curso.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Clientes',component:ClienteComponent},
  {path: 'paginas/Docentes', component:DocenteComponent},
  {path: 'paginas/Cursos', component:CursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
