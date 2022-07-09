import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  imageBack: string = '';
  constructor() {}

  ngOnInit(): void {
    fetch(
      'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
    )
      .then((res) => res.json())
      .then((data) => (this.imageBack = data.urls.small));
  }
}
