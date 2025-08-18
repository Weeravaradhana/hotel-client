import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {OptionComponent} from './inner-items/option-component/option-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
