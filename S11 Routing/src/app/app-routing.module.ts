import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router'; // good practise to register it here
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-activate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // best practise to handle "no" path

  // as individual lines
  // { path: 'users', component: UsersComponent }, // will correspond to localhost:4200/users
  // { path: 'users/:id/:name', component: UserComponent }, // load a single user, ":" means dynamically part

  // groub users
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent } // load a single user, ":" means dynamically part
    ]
  }, // will correspond to localhost:4200/users

  // group together
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // key-value pairs
                                                          // Angular will run the guard CanDeactivateGuard when ever trying to leave
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },

  // { path: 'not-found', component: PageNotFoundComponent }, // component vs...
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}  }, // attaching static data

  { path: '**', redirectTo: '/not-found', pathMatch: 'full'} // ...route,  ** = wildcard, this generic route must be in the bottom

]; // array with all the routes, javascript objects

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

