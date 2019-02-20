import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteVO } from '../../model/vo/cliente.vo';

@Component({
  selector: 'app-exibe-cliente',
  templateUrl: './app-exibe-cliente.component.html',
  styleUrls: ['./app-exibe-cliente.component.scss']
})
export class AppExibeClienteComponent implements OnInit {

  @Input() public cliente: ClienteVO;
  @Output() public respostaExibeCliente = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voltarListaClientes() {
    this.respostaExibeCliente.emit();
  }

  retornaTelefone() {
    return '+ ' +  this.cliente.telefone.pais +
    ' (' + this.cliente.telefone.area + ') ' +
    this.cliente.telefone.numero;
  }

  retornaEndereco() {
    return this.cliente.endereco.tipo + ' ' +
    this.cliente.endereco.logradouro + ' ' +
    this.cliente.endereco.numero + ' ' +
    this.cliente.endereco.complemento + ' ' +
    this.cliente.endereco.bairro + ' ' +
    this.cliente.endereco.cidade + ' ' +
    this.cliente.endereco.estado + ' ' +
    this.cliente.endereco.pais;
  }

}
