"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabase = void 0;
var MongoDatabase = /** @class */ (function () {
    function MongoDatabase() {
    }
    MongoDatabase.prototype.save = function () {
        console.log("Saved using MongoDB");
    };
    return MongoDatabase;
}());
exports.MongoDatabase = MongoDatabase;
