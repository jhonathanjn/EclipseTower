import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { PageQuartos } from './pages/page-quartos/page-quartos';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'quartos', component: PageQuartos},
    {path: 'sobre', component: Sobre},
    {path: 'contato', component: Contato},
];
