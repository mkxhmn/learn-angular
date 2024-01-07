import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // private observableSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() {}

  ngOnInit() {
/*
    this.observableSubscription = interval(1_000).subscribe((count) => {
      console.log(count);
    });
*/

    const custom = new Observable((observer) => {
      let count = 0;


      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count >= 3) {
          observer.error(new Error('count is more than 3'));
        }

        count++;
      }, 1_000);
    });

    this.customSubscription = custom
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((count: number) => {
          return 77 + count;
        })
      )
      .subscribe(
        (count) => {
          console.log('custom', count);
        },
        (error) => {
          confirm(error.message);
        },
        () => {
          console.log('complete');
        }
      );
  }

  ngOnDestroy() {
    // this.observableSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
