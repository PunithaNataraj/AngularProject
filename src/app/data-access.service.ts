import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
