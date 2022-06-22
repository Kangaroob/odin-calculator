const display = document.querySelector('.display-text');

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
var inf = "NICE TRY"

function on() {
    operator()
}

function Clear() {
    x = null;
    y = null;
    z = null;
    result = null;
    equation = function() {
        var Q = Q
    }
    str = null;
    str = "";
    thispress = "clear";
    lastpress = "clear";  
    reqy = false
    operator();
}

function plus() {
    thispress = "plus"
    operator();
    equation = function() {
       result = x + y;
    }    
    thispress = "clear"
    lastpress = "plus"
}

function minus() {
    thispress = "minus"
    operator();
    equation = function() {
      result = x - y;
    };
    thispress = "clear"
    lastpress = "minus"
}

function divby() {
    thispress = "divby"
    operator();
    
        equation = function() {
            if (y != 0) {
                result = x / y;
            } else {
                result = "inf";
            }
        
        };
    
    thispress = "clear"
    lastpress = "divby"
}

function multby() {
    thispress = "multby"
    operator();
    
        equation = function() {
          result = x * y;
        };
    
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
    } else {
        y = null
        reqy = true
    }
    opclose();
}

//Give x and y value; clear str
function opstart() {
   if (x == null) {
        if (str.length > 0) {
            x = parseInt(str);
        }
    } else if (y == null) {
        if (str.length == 0 && reqy != true) {
            y = x
        } else if (str.length != 0) {
            y = parseInt(str)
        }
    } else if (str.length != 0) {
        y = parseInt(str)
    }
    str = ""
}

function opclose() {
    if (x == null) {
        display.innerHTML = "0"
    } else if (result == "inf") {
        display.innerHTML = inf;
        result = null
    } else if (result == null) {
        display.innerHTML = x;
    } else {
        console.log(x.length)
        // x = result.slice(0,10);
        // if (result.length > 8) {
        //     if (result[8] > 4 && result.length > 9 || result[8] > 5) {
        //         result[7] += 1;
        //     };
        //     result = result.slice(0,9)
        // }
        display.innerHTML = x;
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
        display.innerHTML = str;
    }
}

function backspace() {
    if (str.length > 0) {
        str = str.slice(0, -1);
        display.innerHTML = str;
    }
}