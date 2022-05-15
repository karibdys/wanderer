import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public urlLogo: string;
  public faLogin = faCircleUser;

  constructor() {
    this.urlLogo= environment.url_assets+"/img/wanderer_logo.png"
  }

  ngOnInit(): void {
    console.log("iniciado el header");
  }

}
