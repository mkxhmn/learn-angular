import { ResolveFn } from '@angular/router';
import { type ServerProps } from './server.component';
import { inject } from '@angular/core';
import { ServersService } from '../servers.service';

export const serverResolver: ResolveFn<ServerProps> = (route, state) => {
  const serverService = inject(ServersService);

  return serverService.getServer(Number(route.params.id));
};
