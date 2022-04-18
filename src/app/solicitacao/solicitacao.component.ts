import { SolicitacaoService } from './../solicitacao.service';
import { ISolicitacao } from './../ISolicitacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent {

  solicitacao: ISolicitacao = {
    id_donatario: 0,
    id_ong: 0,
    tipoItem: '',
    quantidadeItem: 0
  }

  constructor(private solicitacaoService: SolicitacaoService) { }

  //obterSolicitacoes(){
  //  this.solicitacaoService.obterSolicitacoes()
  //  .then(solicitacao => console.log(solicitacao))
  //  .catch(error => console.error(error));
  //}
  obterPorId(){
    this.solicitacaoService.obterPorId(1)
    .then(doadores => console.log(doadores))
    .catch(error => console.error(error));
  }

  cadastrarSolicitacao(){
    this.solicitacaoService.cadastrarSolicitacao(this.solicitacao)
    .then(solicitacao => console.log("solicitacao adicionada"))
    .catch(error => console.error(error));
    alert("Solicitação Realizada com Sucesso!");
  }

  atualizarSolicitacao(){
    this.solicitacaoService.atualizarSolicitacao(this.solicitacao)
    .then(solicitacao => console.log("atualizado"))
    .catch(error => console.error(error));
  }

  deletarSolicitacao(){
    this.solicitacaoService.deletarSolicitacao(6)
    .then(solicitacao => console.log("removido"))
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

}
