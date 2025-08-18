import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {OptionComponent} from './inner-items/option-component/option-component';
import {OffersComponent} from './inner-items/offers-component/offers-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionComponent,
    OffersComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
