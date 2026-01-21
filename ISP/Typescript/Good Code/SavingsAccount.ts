import { Depositable } from "./Depositable";
import { Withdrawable } from "./Withdrawable";

export class SavingsAccount implements Depositable, Withdrawable {
    deposit(amount: number): void {
        console.log("Deposited", amount);
    }

    withdraw(amount: number): void {
        console.log("Withdrawn", amount);
    }
}
