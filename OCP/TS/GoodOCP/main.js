"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount_1 = require("./SavingsAccount");
var LoanAccount_1 = require("./LoanAccount");
var calculator;
calculator = new SavingsAccount_1.SavingsAccount();
console.log(calculator.calculate(10000));
calculator = new LoanAccount_1.LoanAccount();
console.log(calculator.calculate(10000));
