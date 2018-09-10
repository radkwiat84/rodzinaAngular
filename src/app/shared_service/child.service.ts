import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Child } from '../child';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private baseUrl: string = 'http://localhost:8080/child';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private child: Child;

  constructor(private _http: Http) { }

  createChild(child: Child) {
    return this._http.post(this.baseUrl + '/createChild', JSON.stringify(child), this.options)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  readChildren(){
    return this._http.get(this.baseUrl+'/children', this.options)
      .pipe(map((response: Response)=> response.json()), catchError(this.errorHandler));
  }



  errorHandler(error: Response) {
    return throwError(error || "SERVER ERROR");
  }

  setter(child: Child) {
    this.child = child;
  }

  getter() {
    return this.child;
  }

}
