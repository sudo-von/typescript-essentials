interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    ssn?: string;
}

class Customer{
    constructor(person: IPerson){
    }
}

let person:IPerson = {
    firstName: "Sudo",
    lastName: "Von",
    age: 24
}

let customer = new Customer(person);