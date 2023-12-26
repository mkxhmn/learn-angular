import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuardService = async () => {
  console.group(`authGuardService called, ${new Date()}`);

  const authService = inject(AuthService);
  const router = inject(Router);

  if (await authService.isAuthenticated()) {
    console.log('authorized');
    return true;
  }

  console.log('unauthorized');
  console.groupEnd();

  return router.parseUrl('/');
};
