"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTax = void 0;
var calcTax = function (income, state, dependents) {
    if (state === void 0) { state = 'NY'; }
    var deduction = 0;
    if (dependents) {
        deduction = dependents * 500;
    }
    if (state === 'NY') {
        return income * 0.06 - deduction;
    }
    else if (state === 'NJ') {
        return income * 0.05 - deduction;
    }
    return income * 0.04 - deduction;
};
exports.calcTax = calcTax;
//# sourceMappingURL=05-modules-import-export-2.js.map