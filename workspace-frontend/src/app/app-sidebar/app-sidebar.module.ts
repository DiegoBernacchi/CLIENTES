import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppListaClienteComponent } from './app-lista-cliente/app-lista-cliente.component';
import { AppExibeClienteComponent } from './app-exibe-cliente/app-exibe-cliente.component';
import { AppListaClientePipe } from './app-lista-cliente/app-lista-cliente.pipe';
import { AppListaClienteService } from './app-lista-cliente/app-lista-cliente.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppSidebarComponent,
    AppListaClienteComponent,
    AppExibeClienteComponent,
    AppListaClientePipe
  ],
  exports: [
    AppSidebarComponent
  ],
  providers: [
    AppListaClienteService
  ]
})

export class AppSidebarModule { }
