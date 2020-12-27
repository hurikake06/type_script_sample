"use strict";
// url: https://atcoder.jp/contests/practice/tasks/practice_1
// question:
// 高橋君はデータの加工が行いたいです。
// 整数 a,b,c と、文字列 s が与えられます。
// a+b+c の計算結果と、文字列 s を並べて表示しなさい。
Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer() {
        this.ans = function (input_org) {
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
    }
    Answer.prototype.run = function () {
        this.ans(require("fs").readFileSync("/dev/stdin", "utf8"));
    };
    return Answer;
}());
