import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component'
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component'
import { ContentComponent } from './componentes/content/content.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        ContainerComponent,
        PerfilComponent,
        SidebarComponent,
        ContentComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Portfolio';

}


