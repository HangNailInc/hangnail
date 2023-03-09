import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output()
  pickerClicked: EventEmitter<string> = new EventEmitter<string>();

  onColorClicked(color: string) {
    // save selected Color
    this.selectedColor = color;
    // pass click to parent (app.component)
    this.pickerClicked.emit(this.selectedColor);
  }
}
