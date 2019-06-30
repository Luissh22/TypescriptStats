"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinAnalyzer_1 = require("./analyzers/WinAnalyzer");
var ConsoleReporter_1 = require("./reporters/ConsoleReporter");
var fileName = 'football.csv';
// get data from CSV file
// if i want data from somewhere else, i just pass in a different DataReader
var matchReader = MatchReader_1.MatchReader.fromCsv(fileName);
// load data
matchReader.load();
var matches = matchReader.matches;
var teamName = 'Man City';
var winAnalyzer = new WinAnalyzer_1.WinAnalyzer(teamName);
var consoleReporter = new ConsoleReporter_1.ConsoleReporter();
var winSummary = new Summary_1.Summary(winAnalyzer, consoleReporter);
winSummary.buildAndPrintReport(matches);
