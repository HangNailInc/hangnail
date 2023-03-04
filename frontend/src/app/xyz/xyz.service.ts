import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Tile from '../../../../models/tile';

@Injectable()
export class XyzService {
  constructor(private http: HttpClient) {}

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>('/tiles', { responseType: 'json' }).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
