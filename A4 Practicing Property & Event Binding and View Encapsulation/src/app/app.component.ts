import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onInternalFired(firedNumber: number) {
    console.log(firedNumber);
    (firedNumber % 2) ? this.oddNumbers.push(firedNumber) : this.evenNumbers.push(firedNumber);
  }

}
