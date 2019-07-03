import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // This tells Angular how to create it( how to instantiate)
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    // This informs Angular that you want this service in this component, and angular will instantiate this service for you
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    
    // console.log('A server status changed, new status: ' + accountStatus);
    // This is wrong, you should not instantiate in Angular, use dependency injector instead
    // const service = new LoggingService();
    
    // this.loggingService.logStatusChange(accountStatus);
  }
}
