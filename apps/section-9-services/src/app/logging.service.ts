import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
// 👆 this holds performance advantage, service can be lazy loaded
export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server status changed, new status: ${status}`);
  }
}
