export class BankAccount {
    constructor(public balance: number) {}

    deposit(amount: number) {
        this.balance += amount;
    }
}
