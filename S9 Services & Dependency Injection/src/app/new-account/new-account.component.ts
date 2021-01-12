import { Component } from '@angular/core';

import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService] // WE MUST TELL ANGULAR HOW TO CREATE THE SERVICE
  // providers: [LoggingService] // REMOVE AccountService to use the same instance as in app.component.ts
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // THIS IS HOW WE GET ACCESS TO THE SERVICE DEPENDENCIES
  constructor(private loggingService: LoggingService,
    private accountsService: AccountService) {

    // Example on event emit in another component and subscribed in this.
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // console.log('A server status changed, new status: ' + accountStatus);

    // THIS WORKS BUT IT IS NOT HOW TO USE A SERVICE IN ANGULAR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
