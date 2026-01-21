"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanAccount = void 0;
var LoanAccount = /** @class */ (function () {
    function LoanAccount() {
    }
    LoanAccount.prototype.calculate = function (balance) {
        return balance * 0.08;
    };
    return LoanAccount;
}());
exports.LoanAccount = LoanAccount;
