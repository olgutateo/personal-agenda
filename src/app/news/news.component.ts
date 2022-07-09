import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { NewsServiceService } from '../news-service/news-service.service';
import { Observable } from 'rxjs';
import { NewsInterface } from '../news-interface/news-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @Input()
  news!: NewsInterface[];
  id!: string;
  subscription!: Subscription;

  // radioCountry(event: any) {
  //   this.id = event.target.value;
  //   console.log(this.id);
  //   return this.id;
  // }
  changeId(event: any, id: string) {
    this.id = event.target.value;
    console.log(this.id);

    this.data.changeId(this.id);
  }

  constructor(private data: NewsServiceService) {}

  ngOnInit(): void {
    this.getNews();
    this.subscription = this.data.currentId.subscribe((id) => {
      this.getNews(id);
      this.id = id;
    });

    // this.data.getImages().subscribe((result) => {
    //   console.log(result);

    // })
  }
  async getNews(id: string = 'ro') {
    let response = await this.data.getNews(id);
    let data = await response.json();
    this.news = data.articles;
    console.log(this.news);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
