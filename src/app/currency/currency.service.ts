import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService implements OnInit {
  currency = `https://api.frankfurter.app/latest`;
  constructor(private http: HttpClient) {}
  getCurrency(): Observable<any> {
    return this.http.get(this.currency);
  }

  ngOnInit() {}
}
