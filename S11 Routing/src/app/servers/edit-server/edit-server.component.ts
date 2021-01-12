import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { CanDeactivateGuard } from './can-activate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // if want to check values on creation of component only
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // if want to keep track of values not only at initial creation of component
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );

    this.route.fragment.subscribe();
    // do not need to unsubscribe, Angular takes care of it

    const id = +this.route.snapshot.params['id'];
    // Todo: Subscribe route params to update the id if paramts change

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route }); // navigate by code up one level when saving, requires import Route
  }

  // implement the actual logic to decide if we are allowed to leave or not
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    // two way binding, set at ngInit, can be changed in input
    if ((this.serverName !== this.server.name || (this.serverStatus !== this.server.status)) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
