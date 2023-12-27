import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

export interface ServerProps {
  id: number;
  name: string;
  status: string;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: ServerProps;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /*
  // this is cool, but not resolver level of coolness
    this.server = this.serversService.getServer(
      Number(this.route.snapshot.params.id)
    );

    this.route.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(Number(param.id));
    });
  */

    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  async onEdit() {
    await this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
