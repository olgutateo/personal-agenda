import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Observable } from 'rxjs';
import { CurrencyInterface } from './currency-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currency!: CurrencyInterface;
  amount: number = 1;
  constructor(private data: CurrencyService) {}

  ngOnInit(): void {
    this.data.getCurrency().subscribe((result) => {
      // console.log(result);
      this.currency = result;
      console.log(this.currency.rates['GBP']);
    });
  }
}
