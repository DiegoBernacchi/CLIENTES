import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteVO } from '../../model/vo/cliente.vo';
import { AppListaClienteService } from './app-lista-cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './app-lista-cliente.component.html',
  styleUrls: ['./app-lista-cliente.component.scss']
})
export class AppListaClienteComponent implements OnInit {

  public filtro: string;
  public listaClientes: ClienteVO[] = [];

  @Output() public respostaListaClientes = new EventEmitter();

  constructor(private service: AppListaClienteService) {
  }

  ngOnInit() {
    this.service.listarClientes().subscribe(res => {
      this.listaClientes = res.json();
    });
  }

  selecionarCliente(cliente: ClienteVO) {
    this.respostaListaClientes.emit(cliente);
  }

}
