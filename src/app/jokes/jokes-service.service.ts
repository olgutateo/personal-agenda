import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesServiceService implements OnInit {
  joke = `https://api.chucknorris.io/jokes/random`;
  constructor(private http: HttpClient) {}
  getJoke(): Observable<any> {
    return this.http.get(this.joke);
  }

  ngOnInit() {}
}
