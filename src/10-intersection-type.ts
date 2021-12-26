interface IPersonProps {
    firstName:string;
    lastName:string;
    age:number;
    ssn?:string;
}

interface IEmployeeProps{
    title:string;
    desk:string;
}

type TheWoker = IPersonProps & IEmployeeProps;

let workwer:TheWoker = {
    firstName: "John",
    lastName: "Smith",
    age: 24,
    title: "Hacker",
    desk: "None"
}