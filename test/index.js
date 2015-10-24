var tape = require("tape"),
    bind = require("..");


tape("bind(fn, thisArg, ...args)", function(assert) {
    function test(a, b) {
        return this.name + " age: " + a + " last: " + b;
    }

    bound = bind(test, {
        name: "Bob"
    }, 32);

    assert.equal(bound("Bobby"), "Bob age: 32 last: Bobby", "should bind thisArg and args to passed function");
    assert.end();
});
