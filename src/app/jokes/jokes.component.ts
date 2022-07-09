import { Component, OnInit, Input } from '@angular/core';
import { JokesServiceService } from './jokes-service.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  theJoke: {} = {};
  constructor(private data: JokesServiceService) {}

  ngOnInit(): void {
    this.data.getJoke().subscribe((result) => {
      console.log(result);
      this.theJoke = result.value;
      console.log(`the joke: ${this.theJoke}`);
    });
  }
}
