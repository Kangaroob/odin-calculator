var Q;
var lastpress;
var x = null;
var y = null;
var result = null;
var equation = function() {
    Q = Q;
}
var str = "";
var eqlock = false

function on() {
    operator()
}

function plus() {
    operator();
    equation = function() {
       result = x + y;
    };
    lastpress = "plus"
}

function operator() {
    opstart();
    equation();
    opclose();
}

function sub() {
    if (z == null) {
        z = x - y;
    } else {        
        console.log(z);
        x = z;
        z = null;
    }
}

function div() {
    if (z == null) {
        z = x / y;
    } else {        
        console.log(z);
        x = z;
        z = null;
    }
}

function mult() {
    if (z == null) {
        z = x * y;
    } else {        
        console.log(z);
        x = z;
        z = null;
    }
}

//Give x and y value; clear str
function opstart() {
   if (x == null) {
        if (str.length > 0) {
            x = parseInt(str);
        }
    } else if (y == null) {
        if (str.length == 0) {
            y = x
        } else {
            y = parseInt(str)
        }
    } else if (str.length != 0) {
        y = parseInt(str)
    }
    str = ""
}

function opclose() {
    if (x == null) {
        console.log(0);
    } else if (result == null) {
        console.log(x)
    } else {
        x = result;
        console.log(x);
    };
    result = null;
    eqlock = false;
}

function equals() {
    operator();
    eqlock = true
    lastpress = "equals"
}

function num(k) {
    if (eqlock != true) {
        str += k
        console.log(str)
        lastpress = "num" + k
    }
}

on()
num(3)
plus()
num(5)
equals()
equals()
num(2)
equals()
equals()
equals()
equals()
plus()
plus()
plus()
num(2)
plus()
plus()