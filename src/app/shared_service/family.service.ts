import { Injectable, Query } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Family } from '../family';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { query } from '@angular/core/src/render3/query';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private baseUrl: string = 'http://localhost:8080/family';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private family: Family;

  constructor(private _http: Http) { }

  createFamily(family: Family) {
    return this._http.post(this.baseUrl + '/createfamily', JSON.stringify(family), this.options)
      .pipe(map((responce: Response) => responce.json()), catchError(this.errorHandler));
  }

  readFamily(id: Number) {
    return this._http.get(this.baseUrl + '/family/' + id, this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  readFamilies() {
    return this._http.get(this.baseUrl + '/families', this.options)
      .pipe(map((responce: Response) => responce.json()), catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || "SERVER ERROR");
  }

  setter(family: Family) {
    this.family = family;
  }

  getter() {
    return this.family;
  }

  findCurrentFamily() {
    return this._http.get(this.baseUrl + '/currentFamily', this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }


}
