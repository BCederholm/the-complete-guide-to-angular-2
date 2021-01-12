import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  // resetButtonEnabled = false;

  // onUpdateUsername(event: any): void {
  //   if ((event.target as HTMLInputElement).value !== '') {
  //     this.resetButtonEnabled = true;
  //   } else {
  //     this.resetButtonEnabled = false;
  //   }
  // }

  // onResetButtonClick(): void {
  //   this.username = '';
  //   // this.resetButtonEnabled = false;
  // }

}
