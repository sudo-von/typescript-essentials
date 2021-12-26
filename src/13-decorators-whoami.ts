const whoami = (target) => {
    console.log(`You are: \n ${target}`);
}

@whoami
class Friend{
    constructor(private name:string, private age:number){}
}