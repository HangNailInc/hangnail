import { Component, Input } from '@angular/core';
import Tile from '../../../../models/tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() tile: Tile = new Tile(null, 0, 0, '#000000', new Date());
  @Input() bordered: boolean = false;

  constructor() {}
}
