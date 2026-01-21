"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.calculate = function (balance) {
        return balance * 0.04;
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
