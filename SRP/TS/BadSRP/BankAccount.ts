class BankAccount {
    constructor(public balance: number) {}

    calculateInterest() {
        this.balance += this.balance * 0.04;
        console.log("Interest calculated");
    }

    saveToDatabase() {
        console.log("Saved to database");
    }

    sendNotification() {
        console.log("Notification sent");
    }
}

const account = new BankAccount(10000);
account.calculateInterest();
account.saveToDatabase();
account.sendNotification();
console.log("Final Balance:", account.balance);
