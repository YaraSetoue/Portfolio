import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  hasValue: boolean = false;
  VerificaValue(id:any){
    return (document.getElementsByName(id)[0].nodeValue) ? true : false
  }
}
