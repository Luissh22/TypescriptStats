import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Reporter {
  print(report: string): void;
}

export class Summary {
  analyzer: Analyzer;
  reporter: Reporter;

  constructor(analyzer: Analyzer, reporter: Reporter) {
    this.analyzer = analyzer;
    this.reporter = reporter;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const analysisReport: string = this.analyzer.run(matches);
    this.reporter.print(analysisReport);
  }
}
