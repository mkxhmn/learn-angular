import { Component, Input } from '@angular/core';
import { AccountsService, StatusProps } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: StatusProps) {
    this.accountsService.updateStatus(this.id, status);
  }
}
