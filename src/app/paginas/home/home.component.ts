import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabActive(event:any, id:any){
    let tab = document.querySelectorAll('#'+id),
    nav = event.target,
    tabAtual = document.querySelectorAll('.tab-pane.show'),
    navAtual = document.querySelectorAll('.nav-item.active')

    if(tabAtual){
      tabAtual[0].classList.remove('show');
    }
    if(navAtual){
      navAtual[0].classList.remove('active');
    }
    tab[0].classList.add('show');

    if(nav.classList.contains('nav-item')){
      nav.classList.add('active');
    }
    if(nav.parentElement.classList.contains('nav-item')){
      nav.parentElement.classList.add('active');
    }
  }
}
