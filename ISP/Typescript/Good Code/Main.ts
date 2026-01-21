import { SavingsAccount } from "./SavingsAccount";
import { LoanAccount } from "./LoanAccount";

const sa = new SavingsAccount();
sa.deposit(1000);
sa.withdraw(500);

const la = new LoanAccount();
la.applyLoan();
