import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs/index';
import { environment } from '../../../environments/environment';
import { HttpEndpoints } from '../enums/http-endpoints.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  private url: string;
  private mockFileExtension: string;
  private useMock: boolean;

  constructor(private http: HttpClient) {
    // TODO add real api
    this.useMock = true;

    this.url = this.useMock ? environment.mock_url : environment.api_url;
    this.mockFileExtension = this.useMock ? '.json' : '';
  }

  isMock(): boolean {
    return this.useMock;
  }

  get(path: HttpEndpoints, params: HttpParams = new HttpParams()): Observable<any> {
    console.log(`${this.url}${path}${this.mockFileExtension}`);
    return this.http.get(
      `${this.url}${path}${this.mockFileExtension}`,
      { params }
    );
  }

  put(path: HttpEndpoints, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.url}${path}${this.mockFileExtension}`,
      JSON.stringify(body)
    );
  }

  post(path: HttpEndpoints, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.url}${path}${this.mockFileExtension}`,
      JSON.stringify(body),
    );
  }

  delete(path: HttpEndpoints, params?: HttpParams): Observable<any> {
    return this.http.delete(
      `${this.url}${path}${this.mockFileExtension}`,
      { params }
    );
  }
}
