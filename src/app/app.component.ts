import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsServiceService } from '../app/news-service/news-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  id!: string;
  subscription!: Subscription;

  constructor(private data: NewsServiceService) {}

  ngOnInit() {
    this.subscription = this.data.currentId.subscribe((id) => (this.id = id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
