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
  styleUrls: ['./xyz.component.css'],
})
export class XyzComponent {
  constructor(private xyzService: XyzService) {}

  value: string = '';

  getTiles(): void {
    this.xyzService.getTiles().subscribe((tiles: Tile[]) => {
      this.value = JSON.stringify(tiles);
    });
  }
}
