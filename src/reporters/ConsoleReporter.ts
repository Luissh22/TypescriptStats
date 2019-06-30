import { Reporter } from '../Summary';

export class ConsoleReporter implements Reporter {
  print(report: string): void {
    console.log(report);
  }
}
