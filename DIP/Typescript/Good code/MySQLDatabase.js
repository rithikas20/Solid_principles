"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDatabase = void 0;
var MySQLDatabase = /** @class */ (function () {
    function MySQLDatabase() {
    }
    MySQLDatabase.prototype.save = function () {
        console.log("Saved using MySQL");
    };
    return MySQLDatabase;
}());
exports.MySQLDatabase = MySQLDatabase;
