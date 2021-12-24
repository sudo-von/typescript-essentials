class Human{
    name:string
}

class Swordsman extends Human{
    arms:number;
}

class Animal{
    name:string;
    breed:string;
}

let workers:Array<Human> = [];

workers[0] = new Human();
workers[1] = new Swordsman();
workers[2] = new Animal(); // Wow...