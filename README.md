bind
=======

binds object to functions this value


```javascript
var bind = require("@nathanfaucett/bind");


var counter = {
    value: 0
};

var inc = bind(function inc() {
    this.value++;
}, counter);


inc();

// counter.value === 1
```
