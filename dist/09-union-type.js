var padLeft = function (value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ' + value);
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(padding, "'."));
};
console.log(padLeft('Hello world', 4));
console.log(padLeft('Hello world', 'Yakov says '));
console.log(padLeft('Hello world', true));
//# sourceMappingURL=09-union-type.js.map