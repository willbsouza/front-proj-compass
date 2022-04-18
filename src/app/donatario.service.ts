import { IDonatarioGet } from './IDonatarioGet';
import { Observable } from 'rxjs';
import { IDonatario } from './IDonatario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonatarioService {

  constructor(private httpClient: HttpClient) { }

  obterDonatarios() : Observable<IDonatarioGet[]> {
    return this.httpClient.get<IDonatarioGet[]>(`${API_PATH}donatarios`);
  }
  obterPorId(id: number){
    return this.httpClient.get<IDonatario>(`${API_PATH}donatarios/${id}`).toPromise();
  }
  cadastrarDonatario(donatario: IDonatario){
    return this.httpClient.post<IDonatario>(`${API_PATH}donatarios`, donatario).toPromise();
  }

  atualizarDonatario(donatario: IDonatario){
    return this.httpClient.put<IDonatario>(`${API_PATH}donatarios/${donatario.id}`, donatario).toPromise();
  }

  deletarDonatario(donatarioId: number){
    return this.httpClient.delete(`${API_PATH}donatarios/${donatarioId}`).toPromise();
  }
}
