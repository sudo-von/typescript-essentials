var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tax = /** @class */ (function () {
    function Tax() {
    }
    Tax.prototype.calcTax = function (income, stateTax) {
        console.log("Your honest tax is: ".concat(income * stateTax));
    };
    return Tax;
}());
var TaxMixin = /** @class */ (function () {
    function TaxMixin() {
    }
    TaxMixin.prototype.mafiaSpecial = function (income, stateTax) {
        console.log("Your maia special tax is: ".concat(income * stateTax - 1000));
    };
    TaxMixin.prototype.drugCartelSpecial = function (income, stateTax) {
        console.log("Your drug cartel special tax is: ".concat(income * stateTax - 3000));
    };
    return TaxMixin;
}());
/* Can't do this: class TaxSpecial extends Tax, TaxMixin{} */
var TaxSpecial = /** @class */ (function (_super) {
    __extends(TaxSpecial, _super);
    function TaxSpecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TaxSpecial;
}(Tax));
/* A boilerplate function to copy members of a mixin. */
var applyMixins = function (derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
};
applyMixins(TaxSpecial, [TaxMixin]);
var myTax = new TaxSpecial();
myTax.calcTax(10000, 0.06);
myTax.mafiaSpecial(10000, 0.06);
myTax.drugCartelSpecial(10000, 0.06);
//# sourceMappingURL=11-mixins.js.map