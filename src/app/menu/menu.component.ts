import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public opciones = [
    {
      texto: "Personajes",
      url: "/personajes",
      activo: true
    },
    {
      texto: "Partidas",
      url: "/partidas",
      activo: false

    },
    {
      texto: "Mi Info",
      url: "/info",
      activo: false

    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("iniciado el menú");
  }

}
