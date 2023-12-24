import { Component, OnInit } from '@angular/core';
import { Accounts, AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: Accounts[] = [];

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
