import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };

  serverName = '';
  serverStatus = '';

  allowEdit = false;
  isChangesSaved = false;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.group('edit server component');
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.groupEnd();

    // NOTE: observable
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams.allowEdit === '1';
    });
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(
      Number(this.route.snapshot.params.id!)
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  async onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.isChangesSaved = true;
    await this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if (
      !this.isChangesSaved &&
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status)
    ) {
      return confirm('you have unsaved changes, are you sure to leave?');
    }

    return true;
  }
}
