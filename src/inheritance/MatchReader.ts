import { dateStringToDate } from './utils';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// This is defining a tuple as a type
// Tuples say that this row must be ordered in this specific way to make sense
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}
