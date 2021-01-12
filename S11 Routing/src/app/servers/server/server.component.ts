import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // prefix + convert a string to number
    // const id = +this.route.snapshot.params['id']; // initial fetch of params
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']); // subscripe of all changes on params
    // });

    this.route.data // using observable
    .subscribe(
      (data: Data) => {
        this.server = data['server']; // server corresponds here to server in app-routing.module.se
      }
    );

  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'}); // relative to the current route

  }

}
