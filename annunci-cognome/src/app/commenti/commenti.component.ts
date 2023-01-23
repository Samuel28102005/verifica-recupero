import { Component, Input } from '@angular/core';
import { Annunci } from '../module';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent {
  @Input() commento! : string;
}
