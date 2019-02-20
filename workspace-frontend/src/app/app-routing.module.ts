import { AppPrincipalComponent } from './app-principal/app-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', component: AppPrincipalComponent } ];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})

export class AppRoutingModule { }
