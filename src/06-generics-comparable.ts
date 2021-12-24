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

let first_rectangle:Rectangle = new Rectangle(2,5);
let second_rectangle:Rectangle = new Rectangle(2,3);

first_rectangle.compareTo(second_rectangle) === 1 ? console.log("First rectangle is bigger") : console.log("Second rectangle is smaller");
