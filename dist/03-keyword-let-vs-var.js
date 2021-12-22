(function name() {
    if (true) {
        var customer = "Mary";
        console.log("[let] The name of the customer inside the block is " + customer);
    }
    /*
        Compile time error.
        console.log("The name of the customer outside the block is " + customer);
    */
})();
(function name() {
    if (true) {
        /* Here comes the hoisting. */
        var customer = "Mary";
        console.log("[var] The name of the customer inside the block is " + customer);
    }
    console.log("[var] The name of the customer outside the block is " + customer);
})();
//# sourceMappingURL=03-keyword-let-vs-var.js.map