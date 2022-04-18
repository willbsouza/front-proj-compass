import { DonatarioService } from './../donatario.service';
import { IDonatario } from './../IDonatario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-donatario',
  templateUrl: './donatario.component.html',
  styleUrls: ['./donatario.component.scss']
})
export class DonatarioComponent {

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

  constructor(private donatarioService: DonatarioService) { }

  //obterDonatarios(){
  //  this.donatarioService.obterDonatarios()
  //  .then(donatario => console.log(donatario))
  //  .catch(error => console.error(error));
  //}
  obterPorId(){
    this.donatarioService.obterPorId(1)
    .then(donatario => console.log(donatario))
    .catch(error => console.error(error));
  }

  cadastrarDonatario(){
    this.donatarioService.cadastrarDonatario(this.donatario)
    .then(donatario => console.log("donatario adicionado"))
    .catch(error => console.error(error));
    alert("Cadastro Realizado com Sucesso!");
  }

  atualizarDonatario(){
    this.donatarioService.atualizarDonatario(this.donatario)
    .then(donatario => console.log("atualizado"))
    .catch(error => console.error(error));
  }

  deletarDonatario(){
    this.donatarioService.deletarDonatario(6)
    .then(donatario => console.log("removido"))
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

}
