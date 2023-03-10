import {
  Component,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { colors } from '../constants';
import { HttpService } from '../service/http.service';
import Tile from '../../../../models/tile';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [HttpService],
})
export class GridComponent {
  title = 'grid';
  tiles2d: Tile[][] = [];
  selectedTile?: Tile;
  lastPull: Date;

  @Output()
  tileClicked: EventEmitter<Tile> = new EventEmitter<Tile>();

  //TODO: modify to accept color from server
  constructor(private httpService: HttpService) {
    // Initialize 10x10 grid
    this.tiles2d = [...Array(10)].map(() =>
      [...Array(10)].map(() => new Tile(null, 0, 0, '#00000000', new Date()))
    );

    this.httpService.getTiles().subscribe((tiles: Tile[]) => {
      for (const tile of tiles) {
        console.log(tile);
        this.tiles2d[tile.x][tile.y] = tile;
      }
      console.log('tiles2d:\n' + JSON.stringify(this.tiles2d));
    });
    this.lastPull = new Date();
  }

  onTileClicked(clickedTile: Tile) {
    //save selected Tile (so that we can place border around it)
    this.selectedTile = clickedTile;
    //switch to random color
    this.selectedTile.assignRandomColor();
    //set timestamp
    this.selectedTile.modified = new Date();
    //pass click to parent (app.component)
    this.tileClicked.emit(this.selectedTile);
  }
}
