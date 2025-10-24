import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() paragraph: String = "";
  @Input() imageUrl: String = "";
  @Input() title: String = "";
  @Input() ch: String = "";
}
