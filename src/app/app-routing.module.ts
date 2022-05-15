import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesMainComponent } from './personajes/personajes-main/personajes-main.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
