import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Father } from '../father';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Family } from '../family';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable({
  providedIn: 'root'
})
export class FatherService {
  private baseUrl: string = 'http://localhost:8080/father';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private father: Father;
  private family: Family;

  constructor(private _http: Http) { }

  createFather(father: Father) {
    return this._http.post(this.baseUrl + '/father', JSON.stringify(father), this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  readFathers() {
    return this._http.get(this.baseUrl + '/fathers', this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));

  }

  errorHandler(error: Response) {
    return throwError(error || "SERVER ERROR");
  }

  setter(father: Father) {
    this.father = father;
  }

  getter() {
    return this.father;
  }

  addFatherToFamily(father: Father) {
    return this._http.put(this.baseUrl + '/father', JSON.stringify(father), this.options)
      .pipe(map((response: Response)=>response.json()), catchError(this.errorHandler));

  }

  getFatherByFamilyId(id: Number){
    return this._http.get(this.baseUrl + '/fatherFamilyId/' + id, this.options)
      .pipe(map((response: Response)=> response.json()), catchError(this.errorHandler));
  }
}
