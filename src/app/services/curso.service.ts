import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../domain/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) { }

  save(curso: Curso){
    console.log("Post");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/MS2/Curso/guardar", JSON.stringify(curso), { headers })
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/MS2/Curso/all");
  }
  
}
