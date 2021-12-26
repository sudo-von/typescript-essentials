var Architect = /** @class */ (function () {
    function Architect() {
    }
    Architect.prototype.increasePay = function (percent) {
        console.log("Increasing architect salary by ".concat(percent));
    };
    return Architect;
}());
var Contractor = /** @class */ (function () {
    function Contractor() {
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("Increasing contractor's rate by ".concat(percent));
    };
    return Contractor;
}());
var workers_under_contract = [new Architect(), new Contractor()];
workers_under_contract.forEach(function (worker) { return worker.increasePay(20); });
//# sourceMappingURL=07-interfaces-implements.js.map