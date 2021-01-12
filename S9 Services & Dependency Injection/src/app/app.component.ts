import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountService] // not miss to add a provider that shows for angular how to create the service
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = []; // creates an empty array of accounts

  constructor(private accountService: AccountService) {} // injects the dependency to the service

  // Most initializiation should be done in OnInit and not in constructor
  ngOnInit() {
    // needed to get local access to the accounts in the shared data service
    this.accounts = this.accountService.accounts; // access to the exact same "refereance type" array as stored in the service
  }

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
