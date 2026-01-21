var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.withdraw = function (amount) {
        console.log("Withdrawn:", amount);
    };
    return Account;
}());
var FixedDepositAccount = /** @class */ (function (_super) {
    __extends(FixedDepositAccount, _super);
    function FixedDepositAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedDepositAccount.prototype.withdraw = function (amount) {
        throw new Error("Withdrawal not allowed");
    };
    return FixedDepositAccount;
}(Account));
var acc = new FixedDepositAccount();
acc.withdraw(1000); // runtime error
