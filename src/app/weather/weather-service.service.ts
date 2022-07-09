import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService implements OnInit {
  weatherurl1 = `http://api.weatherapi.com/v1/current.json?key=a1c03b75e050483f9bc191216221606&q=London,&aqi=no`;
  constructor(private http: HttpClient) {}
  getWeather1(): Observable<any> {
    return this.http.get(this.weatherurl1);
  }
  weatherurl2 =
    'http://api.weatherapi.com/v1/current.json?key=a1c03b75e050483f9bc191216221606&q=Eindhoven,&aqi=no';

  getWeather2(): Observable<any> {
    return this.http.get(this.weatherurl2);
  }
  ngOnInit() {}
}
