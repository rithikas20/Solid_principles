"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestService = void 0;
var InterestService = /** @class */ (function () {
    function InterestService() {
    }
    InterestService.prototype.calculate = function (balance) {
        return balance * 0.04;
    };
    return InterestService;
}());
exports.InterestService = InterestService;
