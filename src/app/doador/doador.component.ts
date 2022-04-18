import { IDoadorGet } from './../IDoadorGet';
import { DoadorService } from '../doador.service';
import { IDoador } from '../IDoador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doador',
  templateUrl: './doador.component.html',
  styleUrls: ['./doador.component.scss']
})
export class DoadorComponent {

  doador: IDoador = {
    nomeDoador: '',
    cpfDoador: '',
    senha: '',
    telefone: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  }

  constructor(private doadorService: DoadorService) { }

  obterPorId(){
    this.doadorService.obterPorId(1)
    .then(doadores => console.log(doadores))
    .catch(error => console.error(error));
  }

  cadastrarDoador(){
    this.doadorService.cadastrarDoador(this.doador)
    .then(doador => console.log("doador adicionado"))
    .catch(error => console.error(error));
    alert("Cadastro Realizado com Sucesso!");
  }

  atualizarDoador(){
    this.doadorService.atualizarDoador(this.doador)
    .then(doador => console.log("atualizado"))
    .catch(error => console.error(error));
  }

  deletarDoador(){
    this.doadorService.deletarDoador(6)
    .then(doador => console.log("removido"))
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

}
