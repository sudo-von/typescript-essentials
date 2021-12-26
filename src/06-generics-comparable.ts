interface Comparator<T>{
    compareTo(value:T):number;
}

class Rectangle implements Comparator<Rectangle>{
    constructor(private width:number, private height:number){};
    compareTo(value: Rectangle): number {
        if(this.width*this.height >= value.width*value.height){
            return 1;
        }
        return -1;
    }
}

class Programmer implements Comparator<Programmer>{
    constructor(public name:string, public salary:number){};
    compareTo(value: Programmer): number {
        if(this.salary >= value.salary){
            return 1;
        }
        return -1;
    }
}

let first_programmer:Programmer = new Programmer("Sudo",10000);
let second_programmer:Programmer = new Programmer("VoN",2000);

first_programmer.compareTo(second_programmer) === 1 ? console.log(`${first_programmer.name} is richer`) : console.log(`${second_programmer.name} is poorer`);
