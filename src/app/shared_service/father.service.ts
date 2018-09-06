import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Father } from '../father';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FatherService {
  private baseUrl: string = 'http://localhost:8080/father';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private father:Father;

  constructor(private _http: Http) { }

  createFather(father: Father) {
    return this._http.post(this.baseUrl + '/createFather',JSON.stringify(father), this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  getFathers() {
    return this._http.get(this.baseUrl + '/fathers', this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));

  }

  errorHandler(error: Response) {
    return throwError(error || "SERVER ERROR");
  }

  setter(father:Father){
    this.father = father;
  }

  getter(){
    return this.father;
  }


}
