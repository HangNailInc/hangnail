import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import Tile from '../../../models/tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  // declare Components (not sure if we will need)
  @ViewChild(GridComponent) grid!: GridComponent;
  @ViewChild(ColorPickerComponent) colorPicker!: ColorPickerComponent;

  selectedTile?: Tile;
  selectedColor?: string;

  ngAfterViewInit() {
    // binds viewChild Components (not sure if we will need) x2
    console.log(this.grid);
    console.log(this.colorPicker);
  }

  parentTileClickHandler(tileClicked: Tile) {
    this.selectedTile = tileClicked;

    console.log('Tile Event Passed to App.component');

    // changes color of tile if color has been selected
    if (this.selectedColor != null) {
      this.selectedTile.assignColor(this.selectedColor);
    }
  }

  parentPickerClickHandler(pickerClicked: string) {
    this.selectedColor = pickerClicked;

    console.log('Picker Event Passed to App.component');
  }
}
