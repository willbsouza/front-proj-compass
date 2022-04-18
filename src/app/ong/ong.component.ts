import { OngService } from './../ong.service';
import { IOng } from './../IOng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.scss']
})
export class OngComponent {

  ong: IOng = {
    filialONG: '',
    cnpj: '',
    senha: '',
    telefone: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  }

  constructor(private ongService: OngService) { }

  obterOngs(){
    this.ongService.obterOngs()
    .then(ong => console.log(ong))
    .catch(error => console.error(error));
  }
  obterPorId(){
    this.ongService.obterPorId(1)
    .then(ong => console.log(ong))
    .catch(error => console.error(error));
  }

  cadastrarOng(){
    this.ongService.cadastrarOng(this.ong)
    .then(ong => console.log("ong adicionada"))
    .catch(error => console.error(error));
    alert("Cadastro Realizado com Sucesso!");
  }

  atualizarOng(){
    this.ongService.atualizarOng(this.ong)
    .then(ong => console.log("atualizado"))
    .catch(error => console.error(error));
  }

  deletarOng(){
    this.ongService.deletarOng(6)
    .then(ong => console.log("removido"))
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

}
