"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
var BankService = /** @class */ (function () {
    function BankService(database) {
        this.database = database;
    }
    BankService.prototype.openAccount = function () {
        this.database.save();
    };
    return BankService;
}());
exports.BankService = BankService;
