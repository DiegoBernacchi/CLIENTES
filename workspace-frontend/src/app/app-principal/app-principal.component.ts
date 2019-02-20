import { AppMainComponent } from './../app-main/app-main.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './app-principal.component.html',
  styleUrls: ['./app-principal.component.scss']
})
export class AppPrincipalComponent implements OnInit {

  exibeDados: boolean;

  @ViewChild(AppMainComponent)
  private appMainComponent: AppMainComponent;

  constructor() { }

  ngOnInit() {
  }

  respostaSidebar(exibeDados) {
    this.exibeDados = exibeDados;
    this.appMainComponent.validarPagina();
  }

}
