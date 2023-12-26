import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * do you know that this function can _sniff_ functions that has _canDeactivateGuard_ implemented?
 * @see {@link https://angular.io/guide/router-tutorial-toh#canactivatechild-guarding-child-routes}
 */
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component
) => {
  console.log(`canDeactivateGuardService called, ${new Date()}`);

  return component?.canDeactivate ? component.canDeactivate() : true;
};
