"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Runner = /** @class */ (function () {
    function Runner() {
    }
    Runner.prototype.run = function (input) { throw new Error("Method not implemented."); };
    Runner.prototype.getAtcoderImput = function () { return require("fs").readFileSync("/dev/stdin", "utf8"); };
    Runner.prototype.main = function () { this.run(this.getAtcoderImput()); };
    Runner.prototype.test = function (input) {
        console.log("------------");
        console.log("Test Exec.");
        console.log("------------");
        this.run(input);
        console.log("------------");
        console.log("Test Completed.");
        console.log("------------");
    };
    return Runner;
}());
exports.default = Runner;
