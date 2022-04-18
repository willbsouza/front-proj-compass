import { Observable } from 'rxjs';
import { IDoacao } from './IDoacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IDoacaoGet } from './IDoacaoGet';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private httpClient: HttpClient) { }

  obterDoacoes() : Observable<IDoacaoGet[]>{
    return this.httpClient.get<IDoacaoGet[]>(`${API_PATH}doacoes`);
  }
  obterPorId(id: number){
    return this.httpClient.get<IDoacao>(`${API_PATH}doacoes/${id}`).toPromise();
  }
  cadastrarDoacao(doacao: IDoacao){
    return this.httpClient.post<IDoacao>(`${API_PATH}doacoes`, doacao).toPromise();
  }

  atualizarDoacao(doacao: IDoacao){
    return this.httpClient.put<IDoacao>(`${API_PATH}doacoes/${doacao.id}`, doacao).toPromise();
  }

  deletarDoacao(doacaoId: number){
    return this.httpClient.delete(`${API_PATH}doacoes/${doacaoId}`).toPromise();
  }
}
