export class LoggingService {
    logStatusChange(status: string) {
        console.log('LoggingService: A server status changed, new status: ' + status);
    }
}