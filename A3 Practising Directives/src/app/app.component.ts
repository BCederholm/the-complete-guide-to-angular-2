import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetail = false;
  buttonClicks = [];

  onToggleDisplayDetail(event: any): void {
    this.displayDetail = !this.displayDetail;
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
  }

}


