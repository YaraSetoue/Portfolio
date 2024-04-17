import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(
        private router: Router

    ) { }
    goHome(){
        this.router.navigate(['/home']);
    }

    goPortfolio(){
        this.router.navigate(['/portfolio']);
    }
    goContato(){
        this.router.navigate(['/contato']);
    }

    // BASE = document.getElementsByTagName('base');
    assets(url:string){
        return '/Portfolio/assets'+ url;
    }
}
