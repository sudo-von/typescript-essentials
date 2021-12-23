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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = ssn;
    }
    return Person;
}());
console.log("[Person]");
var p = new Person("Sudo", "Von", 24, "test");
console.log("First name: " + p.firstName);
console.log("Last name: " + p.lastName);
console.log("Age: " + p.age);
/* Inheritance. */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, ssn, salary) {
        var _this = _super.call(this, firstName, lastName, age, ssn) || this;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person));
console.log("[Employee]");
var e = new Employee("Sudo", "Von", 24, "test", 1000);
console.log("First name: " + e.firstName);
console.log("Last name: " + e.lastName);
console.log("Age: " + e.age);
console.log("Salary: " + e.age);
/* Short way. */
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this.name = name;
        this.age = age;
    }
    return Pet;
}());
console.log("[Pet]");
var dog = new Pet("Camila", 10);
console.log("Name: " + dog.name);
console.log("Age: " + dog.age);
//# sourceMappingURL=04-classes-and-inheritance.js.map