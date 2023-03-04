import { Component } from '@angular/core';
import { colors } from '../constants';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  title = 'grid';
  tiles: Tile[];
  selectedTile?: Tile;

  constructor() {
    this.tiles = [];

    let i = 0
    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        this.tiles[i] = new Tile(x, y)
        i++;
      }
    }
  }

  onTileClicked(tile: Tile) {
    console.log('Tile clicked!');
    this.selectedTile = tile;
    tile.changeToRandomColor();
  }
  //need to create list of Tile objects
}

export class Tile {
  title = 'tile'
  x: number;
  y: number;
  modified: string;
  color: string;

  selected:boolean;

  constructor(x:number, y:number) { 
    this.x = x;
    this.y = y;
    this.modified = 'test';
    this.color = this.assignRandomColor();
    this.selected = false;
 }

 assignRandomColor() {
  return colors[Math.floor(Math.random()* colors.length)];
 }

 setSelected(value:boolean) {
  this.selected = value;
 }
 
 setModified(s:string) {
  this.modified = s;
 }

 changeToRandomColor() {
  this.color = this.assignRandomColor();
 }

}
