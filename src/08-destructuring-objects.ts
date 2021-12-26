const getStock = () => ({
    symbol: "IBM",
    price: 100.00,
    open: 99.5,
    volume: 10000
});

let { symbol, price } = getStock();

console.log(`The price of ${symbol} is ${price}`);