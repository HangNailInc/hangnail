import { Component, Input } from '@angular/core';
import { colors } from '../constants';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  title = "color-picker"
  colors: string[] = colors;
  selectedColor: string = "NULL";

  onColorClicked(color: string) {
    console.log('Color clicked!');
    this.selectedColor = color;
  }
}
