import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

import { AccountService } from './account.service';
// import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // highest possible level to inject, makes sure used everywhere, if not overridden on lower levels
  // providers: [AccountService, LoggingService],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
