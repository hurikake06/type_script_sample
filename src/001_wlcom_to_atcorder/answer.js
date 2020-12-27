"use strict";
// url: https://atcoder.jp/contests/practice/tasks/practice_1
// question:
// 高橋君はデータの加工が行いたいです。
// 整数 a,b,c と、文字列 s が与えられます。
// a+b+c の計算結果と、文字列 s を並べて表示しなさい。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var runner_1 = __importDefault(require("../modules/atcorder/runner"));
var Answer = /** @class */ (function (_super) {
    __extends(Answer, _super);
    function Answer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
}(runner_1.default));
exports.default = Answer;
