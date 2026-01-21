var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.calculateInterest = function () {
        this.balance += this.balance * 0.04;
        console.log("Interest calculated");
    };
    BankAccount.prototype.saveToDatabase = function () {
        console.log("Saved to database");
    };
    BankAccount.prototype.sendNotification = function () {
        console.log("Notification sent");
    };
    return BankAccount;
}());
var account = new BankAccount(10000);
account.calculateInterest();
account.saveToDatabase();
account.sendNotification();
console.log("Final Balance:", account.balance);
