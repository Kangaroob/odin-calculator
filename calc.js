const display = document.querySelector('.display-text');
const displaybig = document.querySelector('.display');
const style = document.querySelector('.style');
const infinityDisplay = "-0.0-";

document.addEventListener('keydown', logKey);

let operandX = null;
let operandY = null;
let operandZ = null;
let result = null;
let runCalculation = function() {}
let heldString = "";
let lastPress = "clear";
let thisPress = "clear";
let requireY = false;
let requireClear = false;
let isDecimal = false;
let roundColor = false;

function pressON() {
    operate();
    let styleSelect = style.getAttribute("href")
    if (styleSelect === "./style.css" &&
             confirm("Change to Desktop View?")) {
        style.setAttribute("href", "./deskstyle.css")
    } else if (styleSelect === "./deskstyle.css" &&
             confirm("Change to Mobile View?")) {
        style.setAttribute("href", "./style.css")
    }
}

function goToREADME() {
    operate();
    if (confirm("Leave Calculator and View REAME?")) {
        window.location.href = "./README.md";
    }
}

function pressNumber(k) {
    if (lastPress !== "equals" && heldString.length < 8) {
        if (heldString.length < 7 || parseFloat(heldString) < 0)
        heldString += k
        showOnDisplay(heldString);
    }
}

function showOnDisplay(currentString) {
    if (requireClear === false) {
        setDisplayColor();
        display.innerHTML = currentString
    }
    checkForNumericDisplay();
    roundColor = false;
}

function setDisplayColor() {
    if (roundColor === true) {
        display.setAttribute("style", "background-color: #7f7");
        displaybig.setAttribute("style", "background-color: #7f7");
    } else {
        display.setAttribute("style", "background-color: inherit");
        displaybig.setAttribute("style", "background-color: #777");
    }
}

function checkForNumericDisplay() {
    if (display.innerHTML === "NaN" || display.innerHTML ===
             "Infinity" || display.innerHTML === "-Infinity") {
        display.innerHTML = infinityDisplay
        requireClear = true
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

function pressDecimal() {
    if (lastPress !== "equals" && heldString.length < 8 &&
             isDecimal !== true) {
        heldString += "."
        isDecimal = true
        showOnDisplay(heldString);
    }
}

function PressNegative() {
    if (heldString.length > 0) {
        if (heldString === ".") {
            heldString = "-.";
            showOnDisplay(heldString);
        } else if (heldString === "-.") {
            heldString = ".";
            showOnDisplay(heldString);
        } else if (heldString === "-") {
            heldString = "";
            showOnDisplay("0");
        } else {
            heldString = parseFloat(heldString)
            heldString *= -1
            heldString = String(heldString)
            showOnDisplay(heldString);
        }
    } else if (lastPress === thisPress && operandX !== null){ 
        operandX *= -1
        prepareAndShowDisplay(operandX);
    } else if (lastPress === "equals" && operandX !== null){ 
        operandX *= -1
        prepareAndShowDisplay(operandX);
    } else {
        heldString += "-"
        showOnDisplay(heldString);
    }
}

function operatePlus() {
    thisPress = "plus"
    operate();
    runCalculation = function() {
        let tempX = 100 * operandX;
        let tempY = 100 * operandY;
        result = tempX + tempY;
        result = result / 100;
    };
    showDisplayExtend("+");
    thisPress = "clear";
    lastPress = "plus";
}

function operateMinus() {
    thisPress = "minus"
    operate();
    runCalculation = function() {
        let tempX = 100 * operandX;
        let tempY = 100 * operandY;
        result = tempX - tempY;
        result = result / 100;
    };
    showDisplayExtend("-")
    thisPress = "clear"
    lastPress = "minus"
}

function operateDivide() {
    thisPress = "divby"
    operate();
    runCalculation = function() {
        result = operandX / operandY;
    };
    showDisplayExtend("/")
    thisPress = "clear"
    lastPress = "divby"
}

function operateMultiply() {
    thisPress = "multby"
    operate();
    runCalculation = function() {
        let tempX = 100 * operandX;
        let tempY = 100 * operandY;
        result = tempX * tempY;
        result = result / 10000;
    };
    showDisplayExtend("x")
    thisPress = "clear"
    lastPress = "multby"
}

function operateEquals() {
    repeatOperandYIfNull();
    operate();
    operandZ = operandY;
    operandY = null;
    lastPress = "equals";
    requireY = true;
}

function repeatOperandYIfNull() {
    if (operandY === null) {
        operandY = operandZ;
    }
}

function showDisplayExtend(currentString) {
    if (requireClear === false) {
        display.innerHTML += currentString
    }
}

function operate() {
    operandZ = null;
    zeroHeldString();
    assignOperand();
    clearDecimal();
    clearString();
    runCalculationWithChecks();
    showResult();
    clearResult();
}

function zeroHeldString() { 
    if (heldString === "-" || heldString === "." || heldString === "-.") {
        heldString = 0;
    }
}

function assignOperand() {
    if (operandX === null) {
        if (heldString.length > 0) {
            operandX = parseFloat(heldString);
        }
    } else if (operandY === null) {
        if (heldString.length === 0 && requireY !== true) {
            operandY = operandX
        } else if (heldString.length !== 0) {
            operandY = parseFloat(heldString)
        }
    } else if (heldString.length !== 0) {
        operandY = parseFloat(heldString)
    }
}

function clearDecimal() {
    isDecimal = false;
}

function clearString() {
    heldString = ""
}

function runCalculationWithChecks() {
    if (thisPress === "clear" || thisPress === lastPress ||
             lastPress === "equals" || lastPress === "clear") {
        if (requireY === true) {
            if (operandY !== null) {
                runCalculation();
                requireY = false;
            }
        } else {
            runCalculation();
        }
    } else if (operandY !== null) {
        runCalculation();
    } else {
        requireY = true;
    };
}

function showResult() {
    if (operandX === null) {
        showOnDisplay("0")
    } else if (result === "inf") {
        showOnDisplay(infinityDisplay);
        clearDisplay();
    } else if (result === null) {
        prepareAndShowDisplay(operandX);
    } else {
        roundFinal();
        operandX = result;
        prepareAndShowDisplay(operandX);
    };
}

function clearResult() {
    result = null;
}

function clearDisplay() {
    operandX = null;
    operandY = null;
    operandZ = null;
    runCalculation = function() {
    }
    heldString = null;
    heldString = "";
    thisPress = "clear";
    lastPress = "clear";  
    requireY = false;
    requireClear = false;
    if (result !== "inf") {
        result = null;
        operate();
    } else {
        result=null;
    }
}

function roundFinal() {
    let compareResult = result;
    result = Number(result.toPrecision(6));
    if (compareResult != result) {
        roundColor = true;
    }
}

function prepareAndShowDisplay(currentString) {
    heldString = String(currentString);
    let roundedNum = Number(currentString);
    chooseRounding(roundedNum);
    showOnDisplay(heldString);
    heldString = "";
}

function chooseRounding(roundedNum) {
    let roundedNumAbsolute = makeAbsoluteValue(roundedNum);
    if (roundedNumAbsolute < 1000000000000000000000) {
        let heldStringAbsolute = makeAbsoluteValue(heldString);
        if (heldStringAbsolute.length > 8) {
            roundColor = true;
            if (roundedNumAbsolute > 9999999) {
                let roundedNumStr = parseInt(roundedNum);
                roundedNumStr = String(roundedNumStr);
                if (heldString[0] === "-") {
                    heldString = heldString[0] +
                     heldString[1] + "." + heldString[2] +
                      "e+" + (roundedNumStr.length - 1);
                } else {
                    heldString = heldString[0] + "." +
                     heldString[1] + heldString[2] + "e+" +
                      (roundedNumStr.length - 1);
                }
            } else {
                heldString = heldString.slice(0,8);
            }
            if (heldString[8] >= 5) {
                roundNumber(7);
            }
        heldString = heldString.slice(0,8);
        }
    } else if (roundedNumAbsolute != 0){
        roundColor = true;
        heldString = roundedNum.toPrecision(2);
    }
}

function makeAbsoluteValue(number) {
    if (number < 0) {
        return number *= -1;
    } else {
        return number;
    };
}

function roundNumber(currentIndex) {
    if (currentIndex>0) {
        let previousIndex = currentIndex - 1;
        if (heldString[currentIndex] === ".") {
            roundNumber(previousIndex)
        } else if (heldString[currentIndex] === "9") {
            roundUp10(currentIndex);
            roundNumber(previousIndex)
        } else if (heldString[currentIndex] >= 0 &&
                 heldString[currentIndex] <=8){
            roundUp(currentIndex);
        };
    } else if (currentIndex === 0) {
        if (heldString[currentIndex] >= 0 &&
                 heldString[currentIndex] <=8){
            roundUp(currentIndex);
        } else if (heldString[currentIndex] === "9") {
            heldString.slice(1,);
            heldString = "10" + heldString;
        } else if (heldString[currentIndex] === ".") {
            heldString = "1" + heldString;
        } else if (heldString[currentIndex] === "-") {
            heldString.slice(1,)
            heldString = "-1" + heldString;
        }
    }
};

function roundUp10(currentIndex) {
    let stringStart = heldString.slice(0,currentIndex);
    let stringEnd = heldString.slice((currentIndex + 1),);
    heldString = "" + stringStart + 0 + stringEnd;
}

function roundUp(currentIndex) {
    let higherInteger = parseInt(heldString[currentIndex]);
    higherInteger += 1;
    let stringStart = heldString.slice(0,currentIndex);
    let stringEnd = heldString.slice((currentIndex + 1),);
    if (currentIndex === 0 && stringEnd % 1 === 0) {
        higherInteger = higherInteger + ".";
    };
    heldString = "" + stringStart + higherInteger + stringEnd;
}

function logKey(log) {
    switch (log.key) {
        case "O":
        case "o":
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
        case " ":
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