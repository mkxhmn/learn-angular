import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

export type StatusProps = 'active' | 'inactive' | 'unknown';
export type Accounts = { name: string; status: StatusProps };

@Injectable()
export class AccountsService {
  accounts: Accounts[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<StatusProps>();

  constructor(private loggingService: LoggingService) {}

  // Create operation
  addAccount(name: string, status: StatusProps) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  // Read operation
  getAccount(index: number) {
    return this.accounts[index];
  }

  // Update operation
  updateAccount(index: number, name: string, status: StatusProps) {
    this.accounts[index] = { name, status };
  }

  // Update status operation
  updateStatus(index: number, status: StatusProps) {
    this.accounts[index].status = status;
    this.loggingService.logStatusChange(status);
  }

  // Delete operation
  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
  }
}
