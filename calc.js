const display = document.querySelector('.display-text');
const displaybig = document.querySelector('.display');
const style = document.querySelector('.style');


let log;
function getLog() {
    return log
}

document.addEventListener('keydown', logKey);

let lastpress = "clear";
let thispress = "clear";
let operandX = null;
let operandY = null;
let tempX;
let tempY;
let operandZ = null;
let lowerNumber;
let scratchNum2;
let stringStart;
let stringEnd;
let higherNumber;
let result = null;
let equation = function() {
}
let heldString = "";
let requireY = false;
let requireClear = false;
let isDecimal = false;
let roundColor = false;
let infinityDisplay = "-0.0-";

function pressON() {
    operate();
    let styleSelect = style.getAttribute("href")
    if (styleSelect == "./style.css" && confirm("Change to Desktop View?")) {
        style.setAttribute("href", "./deskstyle.css")
    } else if (styleSelect == "./deskstyle.css" && confirm("Change to Mobile View?")) {
        style.setAttribute("href", "./style.css")
    }
}

function goToREADME() {
    operate();
    if (confirm("Leave Calculator and View REAME?")) {
        window.location.href = "./README.md";
    }
}

function roundUp10(scratchNumber) {
    scratchNum2 = 0;
    stringStart = heldString.slice(0,scratchNumber);
    stringEnd = heldString.slice(higherNumber,);
    heldString = "" + stringStart + scratchNum2 + stringEnd;
}

function roundUp(scratchNumber) {
    scratchNum2 = parseInt(heldString[scratchNumber]);
    scratchNum2 += 1;
    stringStart = heldString.slice(0,scratchNumber);
    stringEnd = heldString.slice(higherNumber,);
    if (scratchNumber == 0 && stringEnd % 1 == 0) {
        scratchNum2 = scratchNum2 + ".";
    };
    heldString = "" + stringStart + scratchNum2 + stringEnd;
}

function roundNumber(currentNumber) {
    if (currentNumber>0) {
        lowerNumber = currentNumber - 1;
        higherNumber = currentNumber + 1;
        if (heldString[currentNumber] == ".") {
            roundNumber(lowerNumber)
        } else if (heldString[currentNumber] == 9) {
            roundUp10(currentNumber);
            roundNumber(lowerNumber)
        } else if (heldString[currentNumber] >= 0 && heldString[currentNumber] <=8){
            roundUp(currentNumber);
        };
    } else if (currentNumber == 0) {
        if (heldString[currentNumber] >= 0 && heldString[currentNumber] <=8){
            roundUp(currentNumber);
        } else if (heldString[currentNumber] == 9) {
            heldString.slice(1,);
            heldString = "10" + heldString;
        } else if (heldString[currentNumber] == ".") {
            heldString = "1" + heldString;
        } else if (heldString[currentNumber] == "-") {
            heldString.slice(1,)
            heldString = "-1" + heldString;
        }
    }
};

function showOnDisplay(currentString) {
    if (requireClear == false) {
        setDisplayColor();
        display.innerHTML = currentString
    }
    checkForNumericDisplay();
    roundColor = false;
}

function setDisplayColor() {
    if (roundColor == true) {
        display.setAttribute("style", "background-color: #7f7");
        displaybig.setAttribute("style", "background-color: #7f7");

    } else {
        display.setAttribute("style", "background-color: inherit");
        displaybig.setAttribute("style", "background-color: #777");

    }
}

function checkForNumericDisplay() {
    if (display.innerHTML == "NaN" || display.innerHTML == "Infinity" || display.innerHTML == "-Infinity") {
        display.innerHTML = infinityDisplay
        requireClear = true
    }
}

function prepareForDisplay(currentString) {
    heldString = String(currentString)
        let roundx = Number(currentString);
        let roundxNeg = String(roundx);
        if (roundxNeg[0] == "-") {
            roundxNeg = roundxNeg.slice(1,);
        };
        roundxNeg = Number(roundxNeg)
        if (roundxNeg < 1000000000000000000000 && roundxNeg >= 0.00000000000001) {
            if (heldString.length > 8) {
                roundColor = true;
                if (roundxNeg > 9999999) {
                    let roundxStr = parseInt(roundx);
                    roundxStr = String(roundxStr);
                    if (heldString[0] == "-") {
                        heldString = heldString[0] + heldString[1] + "." + heldString[2] + "e+" + (roundxStr.length - 1);
                    } else {
                        heldString = heldString[0] + "." + heldString[1] + heldString[2] + "e+" + (roundxStr.length - 1);
                    }
                } else if (roundxNeg < 0.000001){
                    roundx = roundx.toPrecision(3);
                    heldString = String(roundx)
                } else {
                    heldString = heldString.slice(0,8);
                }
                if (heldString[8] >= 5) {
                    roundNumber(7);
                }
            heldString = heldString.slice(0,8);
            }
        } else if (roundxNeg != 0){
            roundColor = true;
            heldString = roundx.toPrecision(2);
        }
        showOnDisplay(heldString);
        heldString = ""
}

function showDisplayExtend(currentString) {
    if (requireClear == false) {
        display.innerHTML += currentString
    }
}

function clearDisplay() {
    operandX = null;
    operandY = null;
    operandZ = null;
    equation = function() {
        let Q = Q
    }
    heldString = null;
    heldString = "";
    thispress = "clear";
    lastpress = "clear";  
    requireY = false;
    requireClear = false;
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
        tempX = 100 * operandX;
        tempY = 100 * operandY;
        result = tempX + tempY;
        result = result / 100;
    };
    showDisplayExtend("+");
    thispress = "clear";
    lastpress = "plus";
}

function operateMinus() {
    thispress = "minus"
    operate();
    equation = function() {
        tempX = 100 * operandX;
        tempY = 100 * operandY;
        result = tempX - tempY;
        result = result / 100;
    };
    showDisplayExtend("-")
    thispress = "clear"
    lastpress = "minus"
}

function operateDivide() {
    thispress = "divby"
    operate();
    equation = function() {
        result = operandX / operandY;
    };
    showDisplayExtend("/")
    thispress = "clear"
    lastpress = "divby"
}

function operateMultiply() {
    thispress = "multby"
    operate();
    equation = function() {
        tempX = 100 * operandX;
        tempY = 100 * operandY;
        result = tempX * tempY;
        result = result / 10000;
    };
    showDisplayExtend("x")
    thispress = "clear"
    lastpress = "multby"
}

function operate() {
    if (thispress == "equals") {
        if (operandY == null) {
            operandY = operandZ;
        }
        thispress = "clear";
    } else {
        operandZ = null;
    }
    zeroHeldString();
    assignOperand();
    clearDecimal();
    clearString();
    if (thispress == "clear" || thispress == lastpress || lastpress == "equals" || lastpress == "clear"){
        if (requireY == true) {
            if (operandY != null) {
                equation();
                requireY = false;
            }
        } else {
            equation();}
    } else if (operandY != null) {
        equation();
    } else {
        requireY = true;
    };
    showResult();
    clearResult();
}

function clearResult() {
    result = null;
}

function assignOperand() {
    if (operandX == null) {
        if (heldString.length > 0) {
            operandX = parseFloat(heldString);
        }
    } else if (operandY == null) {
        if (heldString.length == 0 && requireY != true) {
            operandY = operandX
        } else if (heldString.length != 0) {
            operandY = parseFloat(heldString)
        }
    } else if (heldString.length != 0) {
        operandY = parseFloat(heldString)
    }
}

function clearDecimal() {
    isDecimal = false;
}

function zeroHeldString() { 
    if (heldString == "-" || heldString == "." || heldString == "-.") {
        heldString = 0;
    }
}

function clearString() {
    heldString = ""
}

function showResult() {
    if (operandX == null) {
        showOnDisplay("0")
    } else if (result == "inf") {
        showOnDisplay(infinityDisplay);
        clearDisplay();
    } else if (result == null) {
        prepareForDisplay(operandX);
    } else {
        operandX = result
        prepareForDisplay(operandX);
    };
}

function clearResult() {
    result = null;
}

function operateEquals() {
    thispress = "equals";
    operate();
    operandZ = operandY;
    operandY = null;
    lastpress = "equals";
    requireY = true;
}

function pressNumber(k) {
    if (lastpress != "equals" && heldString.length < 8) {
        if (heldString.length < 7 || parseFloat(heldString) < 0)
        heldString += k
        showOnDisplay(heldString);
    }
}

function pressDecimal() {
    if (lastpress != "equals" && heldString.length < 8 && isDecimal != true) {
        heldString += "."
        isDecimal = true
        showOnDisplay(heldString);
    }
}

function PressNegative() {
    if (heldString.length > 0) {
        if (heldString == ".") {
            heldString = "-.";
            showOnDisplay(heldString);
        } else if (heldString == "-.") {
            heldString = ".";
            showOnDisplay(heldString);
        } else if (heldString == "-") {
            heldString = "";
            showOnDisplay("0");
        } else {
            heldString = parseFloat(heldString)
            heldString *= -1
            heldString = String(heldString)
            showOnDisplay(heldString);
        }
    } else if (lastpress == thispress && operandX != null){ 
        operandX *= -1
        prepareForDisplay(operandX);
    } else if (lastpress == "equals" && operandX != null){ 
        operandX *= -1
        prepareForDisplay(operandX);
    } else {
        heldString += "-"
        showOnDisplay(heldString);
    }
}

function pressBackspace() {
    if (heldString.length > 0) {
        heldString = heldString.slice(0, -1);
        if (heldString.length > 0) {
            showOnDisplay(heldString);
        } else {
            showOnDisplay("0");
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
        case "Home":
            pressBackspace();
            break;
        case "Escape":
        case "Delete":
            clearDisplay();
            break;
        case "+":
        case "=":
            operatePlus();
            break;
        case "-":
        case "_":
            operateMinus();
            break;
        case "/":
        case "?":
            operateDivide();
            break;
        case "*":
        case "x":
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
        case "PageUp":
        case "`":
            PressNegative();
            break;
        case ".":
            pressDecimal();
            break;
        case "i":
        case "I":
            goToREADME();
            break;
        };
};