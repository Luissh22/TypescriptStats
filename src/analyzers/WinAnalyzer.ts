import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

const homeTeamIndex = 1;
const awayTeamIndex = 2;
const winningTeamIndex = 5;

export class WinAnalyzer implements Analyzer {
  constructor(private teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        (match[homeTeamIndex] === this.teamName &&
          match[winningTeamIndex] === MatchResult.HomeWin) ||
        (match[awayTeamIndex] === this.teamName &&
          match[winningTeamIndex] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games.`;
  }
}
