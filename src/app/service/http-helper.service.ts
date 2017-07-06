import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'


@Injectable()
export class HttpHelperService {
	private headers: Headers = new Headers({
		'Content-Type': 'application/json; charset=utf-8'
	});

  constructor(private _http: Http) { }

  public get(url: string, requestOptions?: RequestOptions): Observable<any> {
  	return this.request(url, Object.assign({
  		method: 'get',
  		headers: this.headers,
  	}, requestOptions));
  }
  public post(url: string, body:any, requestOptions?: RequestOptions): Observable<any> {
  	return this.request(url, Object.assign({
  		method: 'post',
  		headers: this.headers,
  		body: body
  	}, requestOptions));
  }

  private request=(url: string, requestOptions?: RequestOptions): Observable<any> => {
  	return this._http.request(url, new RequestOptions(requestOptions))
  	.map(this.preProcessRes).catch(this.handleError);
  };
  private preProcessRes=(res: Response) => {
  	return res.json();
  };
  private handleError=(error: any) => {
  	let errMsg:any = (error.message)? error.message : error.status ?`${error._body}`:'Server error';
  	return Observable.throw(errMsg);
  }

}
