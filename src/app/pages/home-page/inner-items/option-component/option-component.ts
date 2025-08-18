import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-option-component',
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    MatTabLabel

  ],
  templateUrl: './option-component.html',
  styleUrl: './option-component.scss'
})
export class OptionComponent {

}
