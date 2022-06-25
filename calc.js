const display = document.querySelector('.display-text');
const displaybig = document.querySelector('.display');


const style = document.querySelector('.style');


var log;
function returnLog() {
    return log
}

document.addEventListener('keydown', logKey);

var lastpress = "clear";
var thispress = "clear";
var x = null;
var y = null;
var z = null;
var dd;
var sd;
var str1;
var str2;
var d2;
var result = null;
var equation = function() {
}
var str = "";
var reqy = false;
var reqC = false;
var dcm = false;
var neg = false;
var ONtick = 0;
var ONnow = false;
var infotick = 0;
var infonow = false;
var roundColor = false;
var inf = "-0.0-";

function on() {
    ONnow = true;
    operator();
    ONtick += 1;
    if (ONtick > 4) {
        let styleSelect = style.getAttribute("href")
        if (styleSelect == "./style.css") {
            style.setAttribute("href", "./deskstyle.css")
        } else if (styleSelect == "./deskstyle.css") {
            style.setAttribute("href", "./style.css")
        }
    }
    ONnow = false;
}

function README() {
    // infonow = true;
    // operator();
    // infotick += 1;
    // if (infotick > 2) {
        window.location.href = "./README.md";
    // }
    // infonow = false;
}

function d0(ddd) {
    sd = 0;
    str1 = str.slice(0,ddd);
    str2 = str.slice(d2,);
    // console.log("str1 " + str1);
    // console.log(sd);
    // console.log("str2 " + str2);
    str = "" + str1 + sd + str2;
}

function dplus(ddd) {
    sd = parseInt(str[ddd]);
    sd += 1;
    str1 = str.slice(0,ddd);
    str2 = str.slice(d2,);
    if (ddd == 0 && str2 % 1 == 0) {
        console.log("yes")
        sd = sd + ".";
    };
    console.log("str1 " + str1);
    console.log(sd);
    console.log("str2 " + str2);
    str = "" + str1 + sd + str2;
}

function rrround(d) {
    if (d>0) {
        dd = d - 1;
        d2 = d + 1;
        if (str[d] == ".") {
            rrround(dd)
        } else if (str[d] == 9) {
            d0(d);
            rrround(dd)
        } else if (str[d] >= 0 && str[d] <=8){
            dplus(d);
        };
    } else if (d == 0) {
        if (str[d] >= 0 && str[d] <=8){
            dplus(d);
        } else if (str[d] == 9) {
            str.slice(1,);
            str = "10" + str;
        } else if (str[d] == ".") {
            str = "1" + str;
        } else if (str[d] == "-") {
            str.slice(1,)
            str = "-1" + str;
        }
    }
};

function disp(w) {
    if (reqC == false) {
        if (roundColor == true) {
            display.setAttribute("style", "background-color: #7f7");
            displaybig.setAttribute("style", "background-color: #7f7");

        } else {
            display.setAttribute("style", "background-color: inherit");
            displaybig.setAttribute("style", "background-color: #777");

        }
        display.innerHTML = w
    }
    if (display.innerHTML == "NaN" || display.innerHTML == "Infinity" || display.innerHTML == "-Infinity") {
        display.innerHTML = inf
        reqC = true
    }
    roundColor = false;
}

function dispStr(w) {
    str = String(w)
        let roundx = Number(w);
        let roundxNeg = String(roundx);
        if (roundxNeg[0] == "-") {
            roundxNeg = roundxNeg.slice(1,);
        };
        roundxNeg = Number(roundxNeg)
        if (roundxNeg < 1000000000000000000000 && roundxNeg >= 0.00000000000001) {
            if (str.length > 8) {
                // console.log("yes")
                roundColor = true;
                console.log("test2");
                if (roundxNeg > 9999999) {
                    let roundxStr = parseInt(roundx);
                    roundxStr = String(roundxStr);
                    if (str[0] == "-") {
                        str = str[0] + str[1] + "." + str[2] + "e+" + (roundxStr.length - 1);
                    } else {
                        str = str[0] + "." + str[1] + str[2] + "e+" + (roundxStr.length - 1);
                    }
                } else if (roundxNeg < 0.000001){
                    roundx = roundx.toPrecision(3);
                    str = String(roundx)
                    // let strNo0 = String(roundx)
                    // strNo0 = str.slice(3,);
                    // strNo0 = Number(strNo0);
                    // strNo0 = String(strNo0);
                    // if (strNo0[1] >=5) {
                    //     strNo0[0] +=1
                    // }
                    // let roundxStr = parseFloat(roundx);
                    // roundxStr = String(roundxStr);
                    // if (str[0] == "-") {
                    //     str = str[0] + strNo0[0] + "." + strNo0[1] + "e+" + (roundxStr.length - 2);
                    // } else {
                    //     str = strNo0[0] + "." + strNo0[1] + "e-" + (roundxStr.length - 2);
                    // }
                } else {
                    str = str.slice(0,8);
                }
                if (str[8] >= 5) {
                console.log(str);
                    rrround(7);
                console.log(str);
                }
            str = str.slice(0,8);
            }
        } else if (roundxNeg != 0){
            roundColor = true;
            console.log("test1");
            str = roundx.toPrecision(2);
        }
        // roundColor = true;
        //     str = roundx.toPrecision(7)
        //     if (str.length > 7) {
        //         str = roundx.toPrecision(6)
        //     } else if (str.length > 6) {
        //         str = roundx.toPrecision(5)
        //     } else if (str.length > 5) {
        //         str = roundx.toPrecision(4)
        //     } else if (str.length > 4) {
        //         str = roundx.toPrecision(3)
        //     } else 
        //     for (; str.length > 8 ; str = str.slice(0, -1)) {
        //         if (str[-1] < 6) {
        //             str[-2] += 1;
        //         }
        //     }
        // }
        disp(str);
        str = ""
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
    reqy = false;
    reqC = false;
    ONtick = 0;
    infotick = 0;
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
    // console.log(x + " x y " + y);
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
    };
    if (ONnow != true) {
        ONtick = 0;
    };
    // if (infonow != true) {
    //     infotick = 0;
    // };
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
        dispStr(x);
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
        dispStr(x);
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
        if (str.length < 7 || parseFloat(str) < 0)
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
            disp("0");
        } else {
            str = parseFloat(str)
            str *= -1
            str = String(str)
            disp(str);
        }
    } else if (lastpress == thispress && x != null){ 
        x *= -1
        dispStr(x);
    } else if (lastpress == "equals" && x != null){ 
        x *= -1
        dispStr(x);
    } else {
        str += "-"
        disp(str);
    }
}

function backspace() {
    if (str.length > 0) {
        str = str.slice(0, -1);
        if (str.length > 0) {
            disp(str);
        } else {
            disp("0");
        }
    }
};

function logKey(r) {
    log = r.key;
    switch (returnLog()) {
        case "Control":
            on();
            break;
        case "Backspace":
            backspace();
            break;
        case "Home":
            backspace();
            break;
        case "Escape":
            Clear();
            break;
        case "Delete":
            Clear();
            break;
        case "+":
            plus();
            break;
        case "=":
            plus();
            break;
        case "-":
            minus();
            break;
        case "_":
            minus();
            break;
        case "/":
            divby();
            break;
        case "?":
            divby();
            break;
        case "*":
            multby();
            break;
        case "x":
            multby();
            break;
        case "X":
            multby();
            break;
        case "Enter":
            equals();
            break;
        case "1":
            num(1);
            break;
        case "2":
            num(2);
            break;
        case "3":
            num(3);
            break;
        case "4":
            num(4);
            break;
        case "5":
            num(5);
            break;
        case "6":
            num(6);
            break;
        case "7":
            num(7);
            break;
        case "8":
            num(8);
            break;
        case "9":
            num(9);
            break;
        case "0":
            num(0);
            break;
        case "~":
            negative();
            break;
        case "PageUp":
            negative();
            break;
        case "`":
            negative();
            break;
        case ".":
            decimal();
        case "I":
            README();
    };
};