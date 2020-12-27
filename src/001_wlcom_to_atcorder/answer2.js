"use strict";
var Answer = /** @class */ (function () {
    function Answer() {
    }
    Answer.prototype.getAtcoderImput = function () { return require("fs").readFileSync("/dev/stdin", "utf8"); };
    Answer.prototype.main = function () { this.run(this.getAtcoderImput()); };
    Answer.prototype.run = function (input_org) {
        // 1行目がinput[0], 2行目がinput[1], …に入る
        var input = input_org.split("\n");
        var tmp = input[1].split(" ");
        //文字列から10進数に変換するときはparseIntを使います
        var a = parseInt(input[0], 10);
        var b = parseInt(tmp[0], 10);
        var c = parseInt(tmp[1], 10);
        var s = input[2];
        //出力
        console.log('%d %s', a + b + c, s);
    };
    return Answer;
}());
(new Answer).main();
