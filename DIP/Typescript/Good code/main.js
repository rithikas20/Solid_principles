"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankService_1 = require("./BankService");
var MySQLDatabase_1 = require("./MySQLDatabase");
var MongoDatabase_1 = require("./MongoDatabase");
var service = new BankService_1.BankService(new MySQLDatabase_1.MySQLDatabase());
service.openAccount();
service = new BankService_1.BankService(new MongoDatabase_1.MongoDatabase());
service.openAccount();
