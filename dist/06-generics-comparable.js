var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.compareTo = function (value) {
        if (this.width * this.height >= value.width * value.height) {
            return 1;
        }
        return -1;
    };
    return Rectangle;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    ;
    Programmer.prototype.compareTo = function (value) {
        if (this.salary >= value.salary) {
            return 1;
        }
        return -1;
    };
    return Programmer;
}());
var first_programmer = new Programmer("Sudo", 10000);
var second_programmer = new Programmer("VoN", 2000);
first_programmer.compareTo(second_programmer) === 1 ? console.log("".concat(first_programmer.name, " is richer")) : console.log("".concat(second_programmer.name, " is poorer"));
//# sourceMappingURL=06-generics-comparable.js.map