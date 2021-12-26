const getCustomers = async () => {
    let promise = new Promise(
        (resolve, reject) => {
            console.log("Getting customers");
            setTimeout(() => {
                let success = true;
                if(success){
                    resolve("John Smith");
                }
                reject("Can't get customers");
            }, 1000);
        }
    );
    return promise;
}

const getOrders = async (customer) => {
    let promise = new Promise(
        (resolve, reject) => {
            console.log("Getting orders");
            setTimeout(() => {
                let success = true;
                if(success){
                    resolve(`Found the order 123 for ${customer}`);
                }
                reject(`Can't get orders from ${customer}`);
            }, 1000);
        }
    );
    return promise;
}

(async () => {
    try {
        const customer = await getCustomers();
        console.log(`Got customer ${customer}`);
        const orders = await getOrders(customer);
        console.log(orders);
    } catch (error) {
        console.log(error);
    }
})();

console.log(`This is the last line in the code. Chained getCustomers() and getOrders().`);