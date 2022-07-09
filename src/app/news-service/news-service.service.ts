import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsComponent } from '../news/news.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService implements OnInit {
  id: string = 'ro';
  id1: string = 'ro';
  url = `https://newsapi.org/v2/top-headlines?country=${this.id}&apiKey=9d16397018774a758b78b7a81bc1a524`;
  req = new Request(this.url);

  techurl = `https://newsapi.org/v2/top-headlines?country=${this.id1}&category=technology&apiKey=9d16397018774a758b78b7a81bc1a524`;
  req1 = new Request(this.techurl);

  private idSource = new BehaviorSubject('ro');
  currentId = this.idSource.asObservable();

  changeId(id: string) {
    this.idSource.next(id);
  }

  private idSource1 = new BehaviorSubject('ro');
  currentId1 = this.idSource1.asObservable();

  changeId1(id1: string) {
    this.idSource.next(id1);
  }

  constructor(private http: HttpClient) {}
  getNews(id: string = 'ro') {
    const url = `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=9d16397018774a758b78b7a81bc1a524`;
    // return this.http.get('url');
    return fetch(new Request(url));
  }
  techGetNews(id1: string = 'ro') {
    const techurl = `https://newsapi.org/v2/top-headlines?country=${this.id1}&category=technology&apiKey=9d16397018774a758b78b7a81bc1a524`;
    // return this.http.get('url');
    return fetch(new Request(techurl));
  }
  // techGetNews(id:string = 'ro'): Observable<any> {
  //   const techurl = `https://newsapi.org/v2/top-headlines?country=${id}&category=technology&apiKey=9d16397018774a758b78b7a81bc1a524`;

  //   return this.http.get(this.techurl);
  // }

  ngOnInit() {}
}
