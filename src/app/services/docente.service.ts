import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../domain/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient) { }

  save(docente: Docente){
    console.log("Post");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/MS3/Docente/guardar", JSON.stringify(docente), { headers })
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/MS3/Docente/all");
  }
}
