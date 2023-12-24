export type StatusProps = 'active' | 'inactive' | 'unknown';
export type Accounts = { name: string; status: StatusProps };

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

  // Create operation
  addAccount(name: string, status: StatusProps) {
    this.accounts.push({ name, status });
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
  }

  // Delete operation
  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
  }
}
