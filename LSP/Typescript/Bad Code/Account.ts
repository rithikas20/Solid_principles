class Account {
    withdraw(amount: number): void {
        console.log("Withdrawn:", amount);
    }
}

class FixedDepositAccount extends Account {
    withdraw(amount: number): void {
        throw new Error("Withdrawal not allowed");
    }
}

const acc: Account = new FixedDepositAccount();
acc.withdraw(1000); // runtime error
