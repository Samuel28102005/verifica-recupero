import { Component, Input } from '@angular/core';
import { Annunci } from '../module';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent {
@Input() x! : Annunci
n_espandi=false
espandi():boolean{
  this.n_espandi=true
  return false

}

}
