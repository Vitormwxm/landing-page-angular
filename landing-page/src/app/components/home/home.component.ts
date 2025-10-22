import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
