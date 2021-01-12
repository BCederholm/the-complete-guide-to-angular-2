import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    //                                   how long interval between fire/emit event
    //                                                first parameter to subscribe, passing anonymous function, handler for all emitted data
    // store subscription to be able to destroy it
    // //                          interval is an internal observable, but not custom
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // very very rarely build your own observables, you use observable that comes with library
    // and then you only use the subscribe part, hand handle the output data
    // but good to know how they work
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) {
          observer.complete(); // no others are emitted
        }
        if (count > 3) {
          observer.error(new Error('Count is greater then 3!')); // observer dies, do not need to unsubscribe
        }
        count++;
      }, 1000);
    });

    // every observable has a pipe method
    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 2; // true/false, if each datapoint will continue or not in chain to map and so on
    }), map((data: number) => {
      return 'Round: ' + (data + 1); // transform data
    })).subscribe(data => {
      console.log(data);
      // console.log('Round:' + (data + 1));
    }, error => {
      console.log(error); // handling error, no red in javascript
      alert(error.message);
    }, () => {
      console.log('Completed!'); // not reached if error is thrown
    });

  }

  // avoiding memory leaks, still not interested of value longer, added more subscription in parallell when reentering component
  // triggered when leaving component
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
