import { Component } from '@angular/core';
import { colors } from '../constants';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  colors: string[] = colors;
}
