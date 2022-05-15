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
      url: "/personajes"
    },
    {
      texto: "Partidas",
      url: "/partidas"
    },
    {
      texto: "Mi Info",
      url: "/info"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("iniciado el menú");
  }

}
