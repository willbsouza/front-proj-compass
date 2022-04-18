import { Observable } from 'rxjs';
import { IEstoqueGet } from './IEstoqueGet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private httpClient: HttpClient) { }

  obterItens() : Observable<IEstoqueGet[]> {
    return this.httpClient.get<IEstoqueGet[]>(`${API_PATH}itens`);
  }
}
