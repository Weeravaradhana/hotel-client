import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {StaysContextComponent} from '../stays-context-component/stays-context-component';

@Component({
  selector: 'app-option-component',
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    MatTabLabel,
    StaysContextComponent

  ],
  templateUrl: './option-component.html',
  styleUrl: './option-component.scss'
})
export class OptionComponent {

}
