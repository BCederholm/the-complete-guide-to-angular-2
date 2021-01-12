import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable() // As have no other decorator this is needed to tell that something can be injected into it
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>(); // Example on event emitter that is enabled to emit in one component and subscribe in another.

constructor(private logginService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status }); // pass variables to constructor variables
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }

}
