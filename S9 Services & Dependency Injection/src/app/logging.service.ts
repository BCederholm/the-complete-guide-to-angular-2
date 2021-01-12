import { Injectable } from '@angular/core';
// logging.service.ts, explicit name, it is a service

// no @-decorator is used, as we are using for @Component or @Directive
// A service is a normal type script class
@Injectable({providedIn: 'root'}) // RECOMMENDED EVEN IF IT IS TECHNICALLY NOT NEEDED, AS WE DO NOT INJECT SOMETHING INTO THIS SERVICE
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status); // now is code centralizaded
  }

}
