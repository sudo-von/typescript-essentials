interface IPayable{
    increasePay(percent:number):void;
}

class Architect implements IPayable{
    increasePay(percent: number): void {
        console.log(`Increasing architect salary by ${percent}`);
    }
}

class Contractor implements IPayable{
    increasePay(percent: number): void {
        console.log(`Increasing contractor's rate by ${percent}`);
    }
}

let workers_under_contract:Array<IPayable> = [new Architect(), new Contractor()];
workers_under_contract.forEach(worker => worker.increasePay(20));