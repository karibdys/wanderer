import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { TarjetaBaseComponent } from './tarjeta-base/tarjeta-base.component';



@NgModule({
  declarations: [
    BarraMenuComponent,
    TarjetaBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraMenuComponent,
    TarjetaBaseComponent
  ]
})
export class SharedModule { }
