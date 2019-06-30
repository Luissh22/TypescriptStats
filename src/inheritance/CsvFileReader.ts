import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[];
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.data = [];
  }

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8' // string contents
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
