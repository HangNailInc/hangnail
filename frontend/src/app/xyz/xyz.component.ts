import { Component, Injectable } from '@angular/core';
import Tile from '../../../../models/tile';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  providers: [HttpService],
  styleUrls: ['xyz.component.css'],
})
export class XyzComponent {
  constructor(private httpService: HttpService) {}

  value: string = '';

  getTiles(): void {
    this.httpService.getTiles().subscribe((tiles: Tile[]) => {
      this.value = JSON.stringify(tiles);
    });
  }

  postTile(tile: Tile | null): void {
    // for testing/development only
    if (tile == null) {
      tile = new Tile(null, 5, 5, '#ff0000', new Date());
    }

    this.httpService.postTile(tile).subscribe((resTile: Tile) => {
      this.value = 'Posted Tile:\n' + JSON.stringify(resTile);
    });
  }
}
