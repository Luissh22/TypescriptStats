"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var homeTeamIndex = 1;
var awayTeamIndex = 2;
var winningTeamIndex = 5;
var WinAnalyzer = /** @class */ (function () {
    function WinAnalyzer(teamName) {
        this.teamName = teamName;
    }
    WinAnalyzer.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if ((match[homeTeamIndex] === this.teamName &&
                match[winningTeamIndex] === MatchResult_1.MatchResult.HomeWin) ||
                (match[awayTeamIndex] === this.teamName &&
                    match[winningTeamIndex] === MatchResult_1.MatchResult.AwayWin)) {
                wins++;
            }
        }
        return "Team " + this.teamName + " won " + wins + " games.";
    };
    return WinAnalyzer;
}());
exports.WinAnalyzer = WinAnalyzer;
