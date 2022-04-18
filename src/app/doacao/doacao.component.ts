import { DoacaoService } from './../doacao.service';
import { IDoacao } from './../IDoacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent {

  doacao: IDoacao = {
    id_doador: 0,
    id_ong: 0,
    id_categoria: 0,
    tipoItem: '',
    quantidadeItem: 0,
    modalidade: ''
  }

  constructor(private doacaoService: DoacaoService) { }

  //obterDoacoes(){
  //  this.doacaoService.obterDoacoes()
  //  .then(doacao => console.log(doacao))
  // .catch(error => console.error(error));
  //}
  obterPorId(){
    this.doacaoService.obterPorId(1)
    .then(doadores => console.log(doadores))
    .catch(error => console.error(error));
  }

  cadastrarDoacao(){
    this.doacaoService.cadastrarDoacao(this.doacao)
    .then(doacao => console.log("doacao adicionado"))
    .catch(error => console.error(error));
    alert("Doação Realizada com Sucesso!");
  }

  atualizarDoacao(){
    this.doacaoService.atualizarDoacao(this.doacao)
    .then(doacao => console.log("atualizado"))
    .catch(error => console.error(error));
  }

  deletarDoacao(){
    this.doacaoService.deletarDoacao(6)
    .then(doacao => console.log("removido"))
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

}
