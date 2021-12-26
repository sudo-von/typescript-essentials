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
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Swordsman = /** @class */ (function (_super) {
    __extends(Swordsman, _super);
    function Swordsman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Swordsman;
}(Human));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var workers = [];
workers[0] = new Human();
workers[1] = new Swordsman();
workers[2] = new Animal(); // Wow...
//# sourceMappingURL=06-generics.js.map