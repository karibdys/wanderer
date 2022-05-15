import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesMainComponent } from './personajes-main/personajes-main.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PersonajesMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PersonajesModule { }
