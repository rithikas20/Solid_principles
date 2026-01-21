import { SavingsAccount } from "./SavingsAccount";
import { LoanAccount } from "./LoanAccount";
import { InterestCalculator } from "./InterestCalculator";

let calculator: InterestCalculator;

calculator = new SavingsAccount();
console.log(calculator.calculate(10000));

calculator = new LoanAccount();
console.log(calculator.calculate(10000));
