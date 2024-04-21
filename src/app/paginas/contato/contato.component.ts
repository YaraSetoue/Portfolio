import $ from 'jquery';
import { Component } from '@angular/core';

@Component({
    selector: 'app-contato',
    standalone: true,
    imports: [],
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.css'
})
export class ContatoComponent{
    input = ''
    onkey(e:any){
        let inputlabel = e.name
        this.input = e;
        console.log(this.input)
        console.log(inputlabel)
        if(this.input != ''){
            this.hasvalue(inputlabel)
        }
    }
    hasvalue(e:any){
        let inputlabel = $("label[for='"+e+"']")
        inputlabel.addClass('hasvalue')
    }
}