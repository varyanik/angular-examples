import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: Http) {}
  getFolder(folder: string): Observable<Mail[]> {
    const url = `/api/messages?folder=${folder}`;
    return this.http.get(url).pipe(
      map(response => response.json())
    );
  }
  getMessage(id: string): Observable<Mail> {
    const url = `/api/messages/${id}`;
    return this.http.get(url).pipe(
      map(response => response.json())
    );
  }
}
