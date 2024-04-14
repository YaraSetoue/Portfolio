import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component'
import { PortfolioComponent } from './paginas/portfolio/portfolio.component'
import { ContatoComponent } from './paginas/contato/contato.component'


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
