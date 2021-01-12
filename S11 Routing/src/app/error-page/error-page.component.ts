import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string; // mapped with string interpolation in template with {{}}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // alt 1 - if not be changed
    // this.errorMessage = this.route.snapshot.data['message'];

    // alt 2 - if can be schanged while we are still on this page
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
