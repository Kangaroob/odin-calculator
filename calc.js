const display = document.querySelector('.display-text');
const displaybig = document.querySelector('.display');


const style = document.querySelector('.style');


var log;
function getLog() {
    return log
}

document.addEventListener('keydown', logKey);

var lastpress = "clear";
var thispress = "clear";
var x = null;
var y = null;
var tempx;
var tempy;
var z = null;
var lowerNumber;
var scratchNum2;
var str1;
var str2;
var higherNumber;
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

function pressON() {
    ONnow = true;
    operate();
    ONtick += 1;
    if (ONtick > 4) {
        let styleSelect = style.getAttribute("href")
        if (styleSelect == "./style.css") {
            style.setAttribute("href", "./deskstyle.css")
        } else if (styleSelect == "./deskstyle.css") {
            style.setAttribute("href", "./style.css")
        }
        display.innerHTML = "i 5x = info"

    }
    ONnow = false;
}

function goToREADME() {
    infonow = true;
    operate();
    infotick += 1;
    if (infotick > 4) {
        window.location.href = "./README.md";
    }
    infonow = false;
}

function roundUp10(scratchNumber) {
    scratchNum2 = 0;
    str1 = str.slice(0,scratchNumber);
    str2 = str.slice(higherNumber,);
    // console.log("str1 " + str1);
    // console.log(scratchNum2);
    // console.log("str2 " + str2);
    str = "" + str1 + scratchNum2 + str2;
}

function roundUp(scratchNumber) {
    scratchNum2 = parseInt(str[scratchNumber]);
    scratchNum2 += 1;
    str1 = str.slice(0,scratchNumber);
    str2 = str.slice(higherNumber,);
    if (scratchNumber == 0 && str2 % 1 == 0) {
        console.log("yes")
        scratchNum2 = scratchNum2 + ".";
    };
    console.log("str1 " + str1);
    console.log(scratchNum2);
    console.log("str2 " + str2);
    str = "" + str1 + scratchNum2 + str2;
}

function roundNumber(currentNumber) {
    if (currentNumber>0) {
        lowerNumber = currentNumber - 1;
        higherNumber = currentNumber + 1;
        if (str[currentNumber] == ".") {
            roundNumber(lowerNumber)
        } else if (str[currentNumber] == 9) {
            roundUp10(currentNumber);
            roundNumber(lowerNumber)
        } else if (str[currentNumber] >= 0 && str[currentNumber] <=8){
            roundUp(currentNumber);
        };
    } else if (currentNumber == 0) {
        if (str[currentNumber] >= 0 && str[currentNumber] <=8){
            roundUp(currentNumber);
        } else if (str[currentNumber] == 9) {
            str.slice(1,);
            str = "10" + str;
        } else if (str[currentNumber] == ".") {
            str = "1" + str;
        } else if (str[currentNumber] == "-") {
            str.slice(1,)
            str = "-1" + str;
        }
    }
};

// FLAGGED FOR RENAMING
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

// FLAGGED FOR RENAMING
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
                    roundNumber(7);
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

//FLAGGED FOR RENAMING
function dispAdd(w) {
    if (reqC == false) {
        display.innerHTML += w
    }
}

function clearDisplay() {
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
        operate();
    } else {
        result=null;
    }
}

function operatePlus() {
    thispress = "plus"
    operate();
    equation = function() {
        tempx = 100 * x;
        tempy = 100 * y;
        result = tempx + tempy;
        result = result / 100;
    };
    dispAdd("+");
    thispress = "clear";
    lastpress = "plus";
}

function operateMinus() {
    thispress = "minus"
    operate();
    equation = function() {
        tempx = 100 * x;
        tempy = 100 * y;
        result = tempx - tempy;
        result = result / 100;
    };
    dispAdd("-")
    thispress = "clear"
    lastpress = "minus"
}

function operateDivide() {
    thispress = "divby"
    operate();
    equation = function() {
        // tempx = 100 * x;
        // tempy = 100 * y;
        // result = tempx / tempy;
        // result = result / 10000;
        result = x / y;
    };
    dispAdd("/")
    thispress = "clear"
    lastpress = "divby"
}

function operateMultiply() {
    thispress = "multby"
    operate();
    equation = function() {
        tempx = 100 * x;
        tempy = 100 * y;
        result = tempx * tempy;
        result = result / 10000;
    };
    dispAdd("x")
    thispress = "clear"
    lastpress = "multby"
}

function operate() {
    if (thispress == "equals") {
        if (y == null) {
            y = z;
        }
        thispress = "clear"
    } else {
        z = null;
    }
    assignOperand();
    clearString();
    console.log(x + " x y " + y);
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
    if (infonow != true) {
        infotick = 0;
    };
    console.log("result " + result);
    showResult();
    result = null;
}

//Give x and y value; clear str
function assignOperand() {
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
    dcm = false
}

function clearString() {
    str = ""
}

function showResult() {
    if (x == null) {
        disp("0")
    } else if (result == "inf") {
        disp(inf);
        clearDisplay();
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
}

function clearResult() {
    result = null;
}

function operateEquals() {
    thispress = "equals";
    operate();
    z = y;
    y = null;
    lastpress = "equals";
    reqy = true;
}

function pressNumber(k) {
    if (lastpress != "equals" && str.length < 8) {
        if (str.length < 7 || parseFloat(str) < 0)
        str += k
        disp(str);
    }
}

function pressDecimal() {
    if (lastpress != "equals" && str.length < 8 && dcm != true) {
        str += "."
        dcm = true
        disp(str);
    }
}

function PressNegative() {
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

function pressBackspace() {
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
    switch (getLog()) {
        case "Control":
            pressON();
            break;
        case "Backspace":
            pressBackspace();
            break;
        case "Home":
            pressBackspace();
            break;
        case "Escape":
            clearDisplay();
            break;
        case "Delete":
            clearDisplay();
            break;
        case "+":
            operatePlus();
            break;
        case "=":
            operatePlus();
            break;
        case "-":
            operateMinus();
            break;
        case "_":
            operateMinus();
            break;
        case "/":
            operateDivide();
            break;
        case "?":
            operateDivide();
            break;
        case "*":
            operateMultiply();
            break;
        case "x":
            operateMultiply();
            break;
        case "X":
            operateMultiply();
            break;
        case "Enter":
            operateEquals();
            break;
        case "1":
            pressNumber(1);
            break;
        case "2":
            pressNumber(2);
            break;
        case "3":
            pressNumber(3);
            break;
        case "4":
            pressNumber(4);
            break;
        case "5":
            pressNumber(5);
            break;
        case "6":
            pressNumber(6);
            break;
        case "7":
            pressNumber(7);
            break;
        case "8":
            pressNumber(8);
            break;
        case "9":
            pressNumber(9);
            break;
        case "0":
            pressNumber(0);
            break;
        case "~":
            PressNegative();
            break;
        case "PageUp":
            PressNegative();
            break;
        case "`":
            PressNegative();
            break;
        case ".":
            pressDecimal();
            break;
        case "i":
            goToREADME();
            break;
        case "I":
            goToREADME();
            break;
        };
};