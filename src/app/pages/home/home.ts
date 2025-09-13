import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { QuartosComponent } from "../../components/quartos/quartos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, QuartosComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
