var assert = require("assert"),
    bind = require("../src/index");


describe("bind(fn, thisArg, ...args)", function() {
    it("should bind thisArg and args to passed function", function() {
        function test(a) {
            return this.name + " age: " + a;
        }

        bound = bind(test, {
            name: "Bob"
        }, 32);

        assert.equal(bound("Bobby"), "Bob age: 32");
    });
});
