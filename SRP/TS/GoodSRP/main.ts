import { BankAccount } from "./BankAccount";
import { InterestService } from "./InterestService";
import { AccountRepository } from "./AccountRepository";
import { NotificationService } from "./NotificationService";

const account = new BankAccount(10000);

const interest = new InterestService();
const repo = new AccountRepository();
const notify = new NotificationService();

account.deposit(interest.calculate(account.balance));
repo.save();
notify.send();

console.log("Final Balance:", account.balance);
