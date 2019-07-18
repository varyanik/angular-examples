import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: Http
  ) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get('/api/cart').pipe(
      map((response: Response) => response.json()),
      catchError((error: any) => throwError(error.json()))
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').pipe(
      map((response: Response) => response.json()),
      catchError((error: any) => throwError(error.json()))
    );
  }
}
