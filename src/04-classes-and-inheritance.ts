class Person{
    public firstName:string;
    public lastName:string;
    public age:number;
    private _ssn:string;

    constructor(firstName:string, lastName:string, age:number, ssn:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = ssn;
    }
}

console.log("[Person]");
let p = new Person("Sudo","Von",24,"test");
console.log("First name: " + p.firstName);
console.log("Last name: " + p.lastName);
console.log("Age: " + p.age);

/* Inheritance. */
class Employee extends Person{
    public salary:number;
    constructor(firstName:string, lastName:string, age:number, ssn:string, salary:number){
        super(firstName, lastName, age, ssn);
        this.salary = salary;
    }
}

console.log("[Employee]");
let e = new Employee("Sudo", "Von", 24, "test", 1000);
console.log("First name: " + e.firstName);
console.log("Last name: " + e.lastName);
console.log("Age: " + e.age);
console.log("Salary: " + e.age);


/* Short way. */
class Pet{
    constructor(public name:string, public age:number){}
}

console.log("[Pet]");
let dog = new Pet("Camila", 10);
console.log("Name: " + dog.name);
console.log("Age: " + dog.age);