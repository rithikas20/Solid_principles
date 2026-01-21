"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount_1 = require("./SavingsAccount");
var LoanAccount_1 = require("./LoanAccount");
var sa = new SavingsAccount_1.SavingsAccount();
sa.deposit(1000);
sa.withdraw(500);
var la = new LoanAccount_1.LoanAccount();
la.applyLoan();
