import { Component } from "@angular/core";

@Component({
  selector: "app-successalert",
  templateUrl: "./successalert.component.html",
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `,
  ],
})
export class SuccessAlertComponent {
  constructor() {}
}
