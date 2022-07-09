import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { NewsServiceService } from '../news-service/news-service.service';
import { Observable } from 'rxjs';
import { NewsInterface } from '../news-interface/news-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css'],
})
export class TechNewsComponent implements OnInit {
  @Input()
  techNews!: NewsInterface[];
  id1!: string;
  subscription1!: Subscription;

  // radioCountry(event: any) {
  //   this.id = event.target.value;
  //   console.log(this.id);
  //   return this.id;
  // }
  changeId1(event: any, id1: string) {
    this.id1 = event.target.value;
    console.log('Id' + this.id1);
    //
    this.data.changeId1(this.id1);
  }

  constructor(private data: NewsServiceService) {}

  ngOnInit(): void {
    this.subscription1 = this.data.currentId.subscribe((id1) => {
      this.techGetNews(id1);
      this.id1 = id1;
    });
    // this.data.techGetNews(this.id).subscribe((result) => {
    //   // console.log(result);
    //   this.techNews = result.articles;
    //   console.log(this.techNews);
    //   this.techGetNews(this.id)
    // });
  }

  async techGetNews(id1: string = 'ro') {
    let response = await this.data.techGetNews(id1);
    let data = await response.json();
    this.techNews = data.articles;
    console.log(this.techNews);
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
