import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GridComponent, Tile } from './grid/grid.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'app';
  @ViewChild(GridComponent) grid!: GridComponent;
  @ViewChild(ColorPickerComponent) colorPicker!: ColorPickerComponent;

  ngAfterViewInit() {
    // viewChildren
    console.log("Hello world");
    console.log(this.grid);
    console.log(this.colorPicker);
  }

}
