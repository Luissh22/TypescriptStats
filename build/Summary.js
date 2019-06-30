"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, reporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var analysisReport = this.analyzer.run(matches);
        this.reporter.print(analysisReport);
    };
    return Summary;
}());
exports.Summary = Summary;
