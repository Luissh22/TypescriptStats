import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  reader: DataReader;
  matches: MatchData[];

  constructor(reader: DataReader) {
    this.reader = reader;
    this.matches = [];
  }

  load(): void {
    // load up data
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        // perform type conversions
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // type assertion,
          row[6]
        ];
      }
    );
  }
}
