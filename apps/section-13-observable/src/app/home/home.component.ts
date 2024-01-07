import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.observableSubscription = interval(1_000).subscribe((count) => {
      console.log(count);
    });

    const custom = new Observable((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        count++;
      }, 1_000);
    });

    this.customSubscription = custom.subscribe((count) => {
      console.log('custom', count);
    });
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
