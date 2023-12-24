import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService, StatusProps } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  /**
   * Creates an instance of the constructor.
   *
   * @param {AccountsService} accountService - The account service used for managing accounts.
   * @constructor
   */
  constructor(private accountService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: StatusProps) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.accountService.addAccount(accountName, accountStatus);
  }
}
