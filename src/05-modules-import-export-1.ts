import { calcTax as calculateTax } from './05-modules-import-export-2';

let firstTax:number = calculateTax(5000, 'NJ', 3);
console.warn("Your tax is " + firstTax);

let secondTaxt:number = calculateTax(5000);
console.warn("Your tax is " + secondTaxt);