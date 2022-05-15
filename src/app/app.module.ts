import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonajesModule } from './personajes/personajes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PersonajesModule,
    SharedModule
  ],
  
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
