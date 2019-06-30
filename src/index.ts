import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalyzer } from './analyzers/WinAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';

let fileName = 'football.csv';
// get data from CSV file
// if i want data from somewhere else, i just pass in a different DataReader
let matchReader: MatchReader = MatchReader.fromCsv(fileName);

// load data
matchReader.load();

const matches = matchReader.matches;
const teamName = 'Man City';

const winAnalyzer = new WinAnalyzer(teamName);
const consoleReporter = new ConsoleReporter();

const winSummary = new Summary(winAnalyzer, consoleReporter);
winSummary.buildAndPrintReport(matches);
