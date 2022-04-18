import { EstoqueService } from './../estoque.service';
import { IEstoqueGet } from './../IEstoqueGet';
import { ISolicitacaoGet } from './../ISolicitacaoGet';
import { IDoacaoGet } from './../IDoacaoGet';
import { IDonatarioGet } from './../IDonatarioGet';
import { IDoadorGet } from './../IDoadorGet';
import { ISolicitacao } from './../ISolicitacao';
import { IDonatario } from './../IDonatario';
import { IDoador } from './../IDoador';
import { IDoacao } from './../IDoacao';
import { SolicitacaoService } from './../solicitacao.service';
import { DoacaoService } from './../doacao.service';
import { DonatarioService } from './../donatario.service';
import { DoadorService } from './../doador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  doacao: IDoacao = {
    id_doador: 0,
    id_ong: 0,
    id_categoria: 0,
    tipoItem: '',
    quantidadeItem: 0,
    modalidade: ''
  }

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

  donatario: IDonatario = {
    nomeDonatario: '',
    cpfDonatario: '',
    senha: '',
    telefone: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  }

  solicitacao: ISolicitacao = {
    id_donatario: 0,
    id_ong: 0,
    tipoItem: '',
    quantidadeItem: 0
  }

  exibirListaDoador: boolean = false;
  exibirListaDonatario: boolean = false;
  exibirListaSolicitacao: boolean = false;
  exibirListaDoacao: boolean = false;
  exibirEstoque: boolean = false;

  doadorList: IDoadorGet[] = [{
    id: 0,
    cpf: '',
    nome: ''
  }];

  donatarioList: IDonatarioGet[] = [{
    id: 0,
    cpf: '',
    nome: ''
  }];

  doacaoList: IDoacaoGet[] = [{
    id: 0,
    nomeDoador: '',
    filialOng: '',
    item: '',
    quantidadeItem: 0,
    modalidade: '',
    dataCadastro: ''
  }];

  solicitacaoList: ISolicitacaoGet[] = [{
    id: 0,
    nomeDonatario: '',
    filialOng: '',
    item: '',
    quantidadeItem: 0,
    dataCadastro: ''
  }];

  itemList: IEstoqueGet[] = [{
    id: 0,
    tipo: '',
    quantidadeTotal: 0
  }];

  constructor(private doadorService: DoadorService, private donatarioService: DonatarioService, private doacaoService: DoacaoService, private solicitacaoService: SolicitacaoService, private estoqueService: EstoqueService) { }

  ngOnInit(): void {
  }

  obterDoadores(){
    this.limparTela();
    this.exibirListaDoador = true;
    this.doadorService.obterDoadores()
    .subscribe(response => this.doadorList = response);
  }

  deletarDoador(id: number){
    this.doadorService.deletarDoador(id)
    .then(doador => console.log("removido"))
    .catch(error => console.error(error));
    this.limparTela();
  }

  obterDonatarios(){
    this.limparTela();
    this.exibirListaDonatario = true;
    this.donatarioService.obterDonatarios()
    .subscribe(response => this.donatarioList = response);
  }

  deletarDonatario(id: number){
    this.donatarioService.deletarDonatario(id)
    .then(donatario => console.log("removido"))
    .catch(error => console.error(error));
    this.limparTela();
  }

  obterDoacoes(){
    this.limparTela();
    this.exibirListaDoacao = true;
    this.doacaoService.obterDoacoes()
    .subscribe(response => this.doacaoList = response);
  }

  deletarDoacao(id: number){
    this.doacaoService.deletarDoacao(id)
    .then(doacao => console.log("removido"))
    .catch(error => console.error(error));
    this.limparTela();
  }

  obterSolicitacoes(){
    this.limparTela();
    this.exibirListaSolicitacao = true;
    this.solicitacaoService.obterSolicitacoes()
    .subscribe(response => this.solicitacaoList = response)
  }

  deletarSolicitacao(id: number){
    this.solicitacaoService.deletarSolicitacao(id)
    .then(solicitacao => console.log("removido"))
    .catch(error => console.error(error));
    this.limparTela();
  }

  obterItens(){
    this.limparTela();
    this.exibirEstoque = true;
    this.estoqueService.obterItens()
    .subscribe(response => this.itemList = response)
  }

  limparTela(){
    this.exibirListaDoador = false;
    this.exibirListaDonatario = false;
    this.exibirListaSolicitacao = false;
    this.exibirListaDoacao = false;
    this.exibirEstoque = false;
  }
}
