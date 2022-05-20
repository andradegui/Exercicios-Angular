import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //Injetando HtppClient
  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.apiEndpoint}/cliente`);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
     return this.http.post<Cliente>(`${environment.apiEndpoint}/cliente`, cliente);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndpoint}/cliente/${id}`);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${environment.apiEndpoint}/cliente/${cliente.id}`, cliente);  }
}
