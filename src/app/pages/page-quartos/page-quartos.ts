import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { QuartosComponent } from "../../components/quartos/quartos";

@Component({
  selector: 'app-page-quartos',
  imports: [Header, QuartosComponent],
  templateUrl: './page-quartos.html',
  styleUrl: './page-quartos.scss'
})
export class PageQuartos {

}
