import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output()
  tileClicked: EventEmitter<Tile> = new EventEmitter<Tile>();

  //TODO: modify to accept color from server
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

  onTileClicked(clickedTile: Tile) {
    //save selected Tile (so that we can place border around it)
    this.selectedTile = clickedTile;
    //switch to random color
    this.selectedTile.assignRandomColor();
    //set timestamp
    this.selectedTile.modifiedLast = new Date().toUTCString();
    //pass click to parent (app.component)
    this.tileClicked.emit(this.selectedTile);
  }
}

export class Tile {
  title = 'tile'

  x: number;
  y: number;
  modifiedLast?: string;
  color: string;

  //TODO: modify to accept color from server
  constructor(x:number, y:number) { 
    this.x = x;
    this.y = y;
    this.color = this.getRandomColor();
 }

 getRandomColor() {
  return colors[Math.floor(Math.random()* colors.length)];
 }

 assignColor(hex:string) {
  this.color = hex;
 }

 assignRandomColor() {
  this.color = this.getRandomColor();
 }

}
