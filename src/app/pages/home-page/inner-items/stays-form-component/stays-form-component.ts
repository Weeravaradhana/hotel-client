import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    RouterLink
  ],
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss'
})
export class StaysFormComponent {

}
