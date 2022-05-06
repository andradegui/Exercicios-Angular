import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  // Observable retorna 1 Endereco
  obterEndereco(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`);
  }
}
