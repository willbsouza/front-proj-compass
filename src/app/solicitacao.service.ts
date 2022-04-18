import { Observable } from 'rxjs';
import { ISolicitacaoGet } from './ISolicitacaoGet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ISolicitacao } from './ISolicitacao'

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private httpClient: HttpClient) { }

  obterSolicitacoes() : Observable<ISolicitacaoGet[]>{
    return this.httpClient.get<ISolicitacaoGet[]>(`${API_PATH}solicitacoes`);
  }
  obterPorId(id: number){
    return this.httpClient.get<ISolicitacao>(`${API_PATH}solicitacoes/${id}`).toPromise();
  }
  cadastrarSolicitacao(solicitacao: ISolicitacao){
    return this.httpClient.post<ISolicitacao>(`${API_PATH}solicitacoes`, solicitacao).toPromise();
  }

  atualizarSolicitacao(solicitacao: ISolicitacao){
    return this.httpClient.put<ISolicitacao>(`${API_PATH}solicitacoes/${solicitacao.id}`, solicitacao).toPromise();
  }

  deletarSolicitacao(solicitacaoId: number){
    return this.httpClient.delete(`${API_PATH}solicitacoes/${solicitacaoId}`).toPromise();
  }
}
