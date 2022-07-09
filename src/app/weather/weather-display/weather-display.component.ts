import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit {
  weatherLocation1: string[] = [];
  weatherConditionIcon1: string[] = [];
  weatherConditionText1: string[] = [];
  weatherTemp1: number[] = [];
  localTime1: string[] = [];
  weatherLocation2: string[] = [];
  weatherConditionIcon2: string[] = [];
  weatherConditionText2: string[] = [];
  weatherTemp2: number[] = [];
  localTime2: string[] = [];
  constructor(private data: WeatherServiceService) {}

  ngOnInit(): void {
    this.data.getWeather1().subscribe((result) => {
      // console.log(result);
      console.log(result);
      this.weatherLocation1 = result.location.name;
      this.localTime1 = result.location.localtime;
      console.log(this.localTime1);
      this.weatherConditionIcon1 = result.current.condition.icon;
      this.weatherConditionText1 = result.current.condition.text;
      console.log(this.weatherConditionText1);
      this.weatherTemp1 = result.current.temp_c;
      console.log(this.weatherTemp1);
    });
    this.data.getWeather2().subscribe((result) => {
      console.log(result);
      this.weatherLocation2 = result.location.name;
      this.localTime2 = result.location.localtime;
      console.log(this.localTime2);
      this.weatherConditionIcon2 = result.current.condition.icon;
      this.weatherConditionText2 = result.current.condition.text;
      console.log(this.weatherConditionText2);
      this.weatherTemp2 = result.current.temp_c;
      console.log(this.weatherTemp2);
    });
  }
}
