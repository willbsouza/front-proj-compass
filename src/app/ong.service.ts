import { IOng } from './IOng';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  constructor(private httpClient: HttpClient) { }

  obterOngs(){
    return this.httpClient.get<IOng[]>(`${API_PATH}ongs`).toPromise();
  }
  obterPorId(id: number){
    return this.httpClient.get<IOng>(`${API_PATH}ongs/${id}`).toPromise();
  }
  cadastrarOng(ong: IOng){
    return this.httpClient.post<IOng>(`${API_PATH}ongs`, ong).toPromise();
  }

  atualizarOng(ong: IOng){
    return this.httpClient.put<IOng>(`${API_PATH}ongs/${ong.id}`, ong).toPromise();
  }

  deletarOng(ongId: number){
    return this.httpClient.delete(`${API_PATH}ongs/${ongId}`).toPromise();
  }
}
