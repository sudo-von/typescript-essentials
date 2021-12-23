export const calcTax = (income:number, state:string='NY', dependents?:number): number => {

    let deduction:number = 0;
    if(dependents){
        deduction = dependents*500;
    }

    if(state==='NY'){
        return income*0.06-deduction;
    }else if(state==='NJ'){
        return income*0.05-deduction;
    }
    return income*0.04-deduction;
}