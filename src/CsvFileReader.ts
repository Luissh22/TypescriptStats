import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  data: string[][];
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.data = [];
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8' // string contents
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
