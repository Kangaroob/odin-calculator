var lastpress = "clear";
var thispress = "clear";
var x = null;
var y = null;
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

function operator() {
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

function plus() {
    thispress = "plus"
    operator();
    if (reqy != true){
        equation = function() {
           result = x + y;
        }
    }
    thispress = "clear"
    lastpress = "plus"
}

function minus() {
    thispress = "minus"
    operator();
    if (reqy != true){
        equation = function() {
          result = x - y;
        };
    }
    thispress = "clear"
    lastpress = "minus"
}

function divby() {
    thispress = "divby"
    operator();
    if (reqy != true){
        equation = function() {
            if (y != 0) {
                result = x / y;
            } else {
                result = "inf";
            }
        
        };
    }
    thispress = "clear"
    lastpress = "divby"
}

function mutltby() {
    thispress = "mutlby"
    operator();
    if (reqy != true){
        equation = function() {
          result = x * y;
        };
    }
    thispress = "clear"
    lastpress = "mutlby"
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
        console.log(0);
    } else if (result == "inf") {
        console.log(inf)
        result = null
    } else if (result == null) {
        console.log(x)
    } else {
        x = result;
        console.log(x);
    };
    result = null;
}

function equals() {
    operator();
    lastpress = "equals"
}

function num(k) {
    if (lastpress != "equals") {
        str += k
        console.log(str)
    }
}

function backspace() {
    if (str.length > 0) {
        str = str.slice(0, -1);
        console.log(str)
    }
}