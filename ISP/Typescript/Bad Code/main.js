var SavingsAccount = /** @class */ (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.deposit = function () {
        console.log("Deposit done");
    };
    SavingsAccount.prototype.withdraw = function () {
        console.log("Withdrawal done");
    };
    SavingsAccount.prototype.calculateInterest = function () {
        console.log("Interest calculated");
    };
    SavingsAccount.prototype.applyLoan = function () {
        throw new Error("Loan not supported for Savings Account");
    };
    return SavingsAccount;
}());
// Sample usage
var account = new SavingsAccount();
account.deposit();
account.withdraw();
account.calculateInterest();
account.applyLoan(); // runtime error (intentional)
