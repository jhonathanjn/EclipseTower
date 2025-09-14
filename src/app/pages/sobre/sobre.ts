import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [Header, Footer, RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss'
})
export class Sobre {

}
