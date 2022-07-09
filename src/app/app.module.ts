import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather/weather-display/weather-display.component';
import { ImagesComponent } from './news/images/images.component';
import { JokesComponent } from './jokes/jokes.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TechNewsComponent,
    TodolistComponent,
    WeatherDisplayComponent,
    ImagesComponent,
    JokesComponent,
    CurrencyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
