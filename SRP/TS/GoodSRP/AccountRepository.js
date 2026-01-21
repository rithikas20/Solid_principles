"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
var AccountRepository = /** @class */ (function () {
    function AccountRepository() {
    }
    AccountRepository.prototype.save = function () {
        console.log("Saved to database");
    };
    return AccountRepository;
}());
exports.AccountRepository = AccountRepository;
