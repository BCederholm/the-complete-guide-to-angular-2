import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// a guard always needs to be a service, needs to be provided
// an interface is a contract to be importet of some other class that enforces that class to provide some logic
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): // optional route, where we are going
    Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate();

  }

}
