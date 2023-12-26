import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuardService } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    // canActivate: [authGuardService],
    component: ServersComponent,
    children: [
      {
        path: '',
        /**
         * @see {@link https://angular.io/guide/router-tutorial-toh#canactivatechild-guarding-child-routes}
         */
        canActivateChild: [authGuardService],
        children: [
          {
            path: ':id',
            component: ServerComponent,
          },
          {
            canDeactivate: [canDeactivateGuard],
            path: ':id/edit',
            component: EditServerComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**', // catch all path that is unknown to your app
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
