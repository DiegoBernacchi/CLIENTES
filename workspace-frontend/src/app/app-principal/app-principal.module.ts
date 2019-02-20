
import { NgModule } from '@angular/core';
import { AppPrincipalComponent } from './app-principal.component';
import { AppSidebarModule } from '../app-sidebar/app-sidebar.module';
import { AppMainModule } from '../app-main/app-main.module';

@NgModule({
  declarations: [
    AppPrincipalComponent
  ],
  imports: [
    AppSidebarModule,
    AppMainModule
  ]
})

export class AppPrincipalModule { }
