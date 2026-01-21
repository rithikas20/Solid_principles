abstract class Account {
    constructor(public balance: number) {}
}

interface Withdrawable {
    withdraw(amount: number): void;
}

class SavingsAccount extends Account implements Withdrawable {
    withdraw(amount: number): void {
        this.balance -= amount;
        console.log("Withdrawn:", amount);
    }
}

class FixedDepositAccount extends Account {}

const acc: Withdrawable = new SavingsAccount(10000);
acc.withdraw(2000); // ✅ correct
