import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMainComponent } from './app-main.component';
import { AppMainService } from './app-main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppMainComponent
  ],
  exports: [
    AppMainComponent
  ],
  providers: [
    AppMainService
  ]
})

export class AppMainModule { }
