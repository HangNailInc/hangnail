import { Component, Injectable } from '@angular/core';
import Tile from '../../../../models/tile';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { XyzService } from './xyz.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  providers: [XyzService],
  styleUrls: ['xyz.component.css'],
})
export class XyzComponent {
  constructor(private xyzService: XyzService) {}

  value: string = '';

  getTiles(): void {
    this.xyzService.getTiles().subscribe((tiles: Tile[]) => {
      this.value = JSON.stringify(tiles);
    });
  }

  postTile(tile: Tile | null): void {
    // for testing/development only
    if (tile == null) {
      tile = new Tile(null, 5, 5, '#ff0000', new Date());
    }

    this.xyzService.postTile(tile).subscribe((resTile: Tile) => {
      this.value = 'Posted Tile:\n' + JSON.stringify(resTile);
    });
  }
}
