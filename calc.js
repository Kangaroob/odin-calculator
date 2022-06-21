var x;
var y;
var z = null;

function add() {
    if (z == null) {
        z = x + y;
    } else {        
        console.log(z);
        x = z;
        z = null;
    }
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

function eq() {
    console.log(z);
    x = z;
    z = null;
}

x = 3
y = 5
add()
add()