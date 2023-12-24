import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService, StatusProps } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  /**
   * Creates an instance of the constructor.
   *
   * @param {LoggingService} loggingService - The logging service used for logging. This informs Angular that we will be injecting the LoggingService into the component.
   * @param {AccountsService} accountService - The account service used for managing accounts.
   * @constructor
   */
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: StatusProps) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
