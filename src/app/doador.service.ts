import { Observable } from 'rxjs';
import { IDoadorGet } from './IDoadorGet';
import { IDoador } from './IDoador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  constructor(private httpClient: HttpClient) { }

  obterDoadores() : Observable<IDoadorGet[]> {
    return this.httpClient.get<IDoadorGet[]>(`${API_PATH}doadores`);
  }

  obterPorId(id: number){
    return this.httpClient.get<IDoadorGet>(`${API_PATH}doadores/${id}`).toPromise();
  }
  cadastrarDoador(doador: IDoador){
    return this.httpClient.post<IDoador>(`${API_PATH}doadores`, doador).toPromise();
  }

  atualizarDoador(doador: IDoador){
    return this.httpClient.put<IDoador>(`${API_PATH}doadores/${doador.id}`, doador).toPromise();
  }

  deletarDoador(doadorId: number){
    return this.httpClient.delete(`${API_PATH}doadores/${doadorId}`).toPromise();
  }
}
