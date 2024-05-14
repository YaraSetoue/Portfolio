import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contato',
    standalone: true,
    imports: [FormsModule,ReactiveFormsModule],
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.css'
})
export class ContatoComponent{
    ContatoForm!: FormGroup;
    constructor (){
        this.ContatoForm = new FormGroup({
            NOME: new FormControl(''),
            EMAIL: new FormControl(''),
            MENSSAGEM: new FormControl('')
        });
    }
    onkey(e:any){
        let inputlabel = e.target.name;
        this.hasvalue(inputlabel);
    }
    hasvalue(e:any){
        if(e){
            let inputlabel = document.querySelectorAll("label[for='"+e+"']")[0];
            if(inputlabel){
                if(this.ContatoForm.controls[e].value){
                    inputlabel.classList.add('hasvalue')
                }
                if(!this.ContatoForm.controls[e].value){
                    inputlabel.classList.remove('hasvalue')
                }
            }
        }
    }

    
}