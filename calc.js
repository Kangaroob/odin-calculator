const display = document.querySelector('.display-text');

// var log;

// document.addEventListener('keydown', logKey));

// function logKey(r) {
//     if (r.key === "9") {
//         num(9)
//     } else {
//     log = r.key;
    // disp(log);
    // log = String(log)
    // if (log == "9") {
    //     num(9);
    // }
//     }
// };

var lastpress = "clear";
var thispress = "clear";
var x = null;
var y = null;
var z = null;
var result = null;
var equation = function() {
}
var str = "";
var reqy = false
var reqC = false
var dcm = false
var neg = false
var inf = "-0.0-"

function on() {
    operator()
}

function disp(w) {
    if (reqC == false) {
        display.innerHTML = w
    }
    if (display.innerHTML == "NaN" || display.innerHTML == "Infinity") {
        display.innerHTML = inf
        reqC = true
    }
}

function dispAdd(w) {
    if (reqC == false) {
        display.innerHTML += w
    }
}

function Clear() {
    x = null;
    y = null;
    z = null;
    equation = function() {
        var Q = Q
    }
    str = null;
    str = "";
    thispress = "clear";
    lastpress = "clear";  
    reqy = false
    reqC = false
    if (result != "inf") {
        result = null;
        operator();
    } else {
        result=null;
    }
}

function plus() {
    thispress = "plus"
    operator();
    equation = function() {
       result = x + y;
    };
    dispAdd("+");
    thispress = "clear";
    lastpress = "plus";
}

function minus() {
    thispress = "minus"
    operator();
    equation = function() {
      result = x - y;
    };
    dispAdd("-")
    thispress = "clear"
    lastpress = "minus"
}

function divby() {
    thispress = "divby"
    operator();
    equation = function() {
        // if (y != 0) {
            result = x / y;
        // } else {
        //     result = "inf";
        // }
    };
    dispAdd("/")
    thispress = "clear"
    lastpress = "divby"
}

function multby() {
    thispress = "multby"
    operator();
    equation = function() {
        result = x * y;
    };
    dispAdd("x")
    thispress = "clear"
    lastpress = "multby"
}

function operator() {
    if (thispress == "equals") {
        if (y == null) {
            y = z;
        }
        thispress = "clear"
    } else {
        z = null;
    }
    opstart();
    if (thispress == "clear" || thispress == lastpress || lastpress == "equals" || lastpress == "clear"){
        if (reqy == true) {
            if (y != null) {
                equation();
                reqy = false;
            }
        } else {
            equation();}
    } else if (y != null) {
        equation();
    } else {
        reqy = true;
    }
    opclose();
}

//Give x and y value; clear str
function opstart() {
    if (str == "-" || str == "." || str == "-.") {
        str = 0;
    }
   if (x == null) {
        if (str.length > 0) {
            x = parseFloat(str);
        }
    } else if (y == null) {
        if (str.length == 0 && reqy != true) {
            y = x
        } else if (str.length != 0) {
            y = parseFloat(str)
        }
    } else if (str.length != 0) {
        y = parseFloat(str)
    }
    str = ""
    dcm = false
}

function opclose() {
    if (x == null) {
        disp("0")
    } else if (result == "inf") {
        disp(inf);
        Clear();
    } else if (result == null) {
        disp(x);
    } else {
        // x = Number(result);
        // x = x.toPrecision(4)
        // console.log(x.length);
        // x = result.slice(0,10);
        // if (x.length > 9) {
            // x = x.slice(0, 10);
        // console.log("x string " + x);

        //     if (result[8] > 4 && result.length > 9 || result[8] > 5) {
        //         result[7] += 1;
            // };
        //     result = result.slice(0,9)
        // }
        // console.log("x float" + x)
        x = result
        let stringx = String(x)
        let roundx = Number(x)
        if (stringx.length > 8) {
            if (roundx > 9999999) {
                roundx = roundx.toPrecision(4)
            } else {
                roundx = roundx.toPrecision(7)
            }
        }
        disp(roundx);
        // x = parseFloat(x)
    };
    result = null;
}

function equals() {
    thispress = "equals";
    operator();
    z = y;
    y = null;
    lastpress = "equals";
    reqy = true;
}

function num(k) {
    if (lastpress != "equals" && str.length < 8) {
        str += k
        disp(str);
    }
}

function decimal() {
    if (lastpress != "equals" && str.length < 8 && dcm != true) {
        str += "."
        dcm = true
        disp(str);
    }
}

function negative() {
    if (str.length > 0) {
        if (str == ".") {
            str = "-.";
            disp(str);
        } else if (str == "-.") {
            str = ".";
            disp(str);
        } else if (str == "-") {
            str = "";
            disp(str);
        } else {
            str = parseFloat(str)
            str *= -1
            str = String(str)
            disp(str);
        }
    } else if (lastpress == thispress && x != null){ 
        x *= -1
        disp(x);
    } else {
        str += "-"
        disp(str);
    }
}

function backspace() {
    if (str.length > 0) {
        str = str.slice(0, -1);
        disp(str);
    }
}