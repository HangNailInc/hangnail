import { AfterViewInit, Component, Directive, Input, ViewChild } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  grid?: GridComponent;
  picker?: ColorPickerComponent;

  constructor() {
    console.log(this.grid);
  }

  ngAfterViewInit() {
    // viewChildren
  }

}
