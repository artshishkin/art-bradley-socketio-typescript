"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LuckyNumbersGame {
    constructor() {
        this.LuckyNumbers = {};
    }
    GetWinners(number) {
        let ret = [];
        for (let key in this.LuckyNumbers) {
            if (number === this.LuckyNumbers[key]) {
                ret.push(key);
            }
        }
        return ret;
    }
}
exports.default = LuckyNumbersGame;
//# sourceMappingURL=LuckyNumbersGame.js.map