import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteVO } from '../model/vo/cliente.vo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  public exibeCliente: boolean;
  public clienteSelecionado: ClienteVO;

  @Output() public respostaSidebar = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.exibeCliente = false;
    this.respostaSidebar.emit(this.exibeCliente);
  }

  respostaListaClientes(resposta) {
    this.clienteSelecionado = resposta;
    this.exibeCliente = !this.exibeCliente;
    this.respostaSidebar.emit(this.exibeCliente);
  }

  respostaExibeCliente() {
    this.clienteSelecionado = null;
    this.exibeCliente = !this.exibeCliente;
    this.respostaSidebar.emit(this.exibeCliente);
  }

}
