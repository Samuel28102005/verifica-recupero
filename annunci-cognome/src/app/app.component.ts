import { Component } from '@angular/core';
import { Annunci } from './module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  annunci_vect: Annunci[] = []
  invia(nome:HTMLInputElement, telefono:HTMLInputElement, messaggio:HTMLInputElement):boolean{
    console.log(nome.value, telefono.value, messaggio.value)
    this.annunci_vect.push(new Annunci(nome.value, telefono.value, messaggio.value))
    nome.value="";
    telefono.value="";
    messaggio.value="";
    return false
  }


}
