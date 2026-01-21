"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.deposit = function (amount) {
        console.log("Deposited", amount);
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        console.log("Withdrawn", amount);
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
