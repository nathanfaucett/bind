var isFunction = require("is_function"),
    fastSlice = require("fast_slice"),
    createFunctionWrapper = require("create_function_wrapper");


function baseBind(fn, thisArg, args) {
    var bound = createFunctionWrapper(fn),
        wrapper = bound.__wrapper__;

    wrapper.setThisArg(thisArg);
    wrapper.setArgsLeft(args);

    return bound;
}

module.exports = function bind(fn, thisArg) {
    if (!isFunction(fn)) {
        throw new TypeError("bind(fn, thisArg, ...args) fn must be a function");
    }
    return baseBind(fn, thisArg, arguments.length > 2 ? fastSlice(arguments, 2) : null);
};
