/**
 * Created by
 * jaimemoncada on 4/17/17.
 */

(function () {
    "use strict";

    <!--======= Index =======-->
    var screenOutPut = document.getElementById('screen1');
    var screenOutPut2 = document.getElementById('screen2');
    var screenOutPut3 = document.getElementById('screen3');
    var numbers = document.getElementsByClassName('num');
    var operators = document.getElementsByClassName('operator');
    var equalsBtn = document.getElementById('eqn-bg');
    var clrScreen = document.getElementById('clearBtn');

    // Check if the screen2 have input if yes the user input should go to Screen3
    function outPutScreenNum() {
        if (screenOutPut2.innerHTML == '') {
            screenOutPut.innerHTML += (this.innerHTML);
        } else {
            screenOutPut3.innerHTML += (this.innerHTML);
        }
    }

    function outPutScreenOper() {
        if (screenOutPut2.innerHTML == screenOutPut3.innerHTML) {
            screenOutPut2.innerHTML = (this.innerHTML);
        } else {
            screenOutPut3.innerHTML = ("");
            screenOutPut2.innerHTML = (this.innerHTML);
        }
    }

    function doMath() {
        switch (screenOutPut2.innerHTML) {
            case "+":
                var plusResult = parseFloat(screenOutPut.innerHTML) + parseFloat(screenOutPut3.innerHTML);
                screenOutPut.innerHTML = plusResult;
                break;
            case "-":
                var minusResult = parseFloat(screenOutPut.innerHTML) - parseFloat(screenOutPut3.innerHTML);
                screenOutPut.innerHTML = minusResult;
                break;
            case "*":
                var multiResult = parseFloat(screenOutPut.innerHTML) * parseFloat(screenOutPut3.innerHTML);
                screenOutPut.innerHTML = multiResult;
                break;
            case "/":
                var divResult = parseFloat(screenOutPut.innerHTML) / parseFloat(screenOutPut3.innerHTML);
                screenOutPut.innerHTML = divResult;
        }
    }

    function clearAll() {
        screenOutPut.innerHTML = ("");
        screenOutPut2.innerHTML = ("");
        screenOutPut3.innerHTML = ("");
    }

    for (var o = 0; o < operators.length; o++) {
        operators[o].addEventListener("click", outPutScreenOper);
    }


    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", outPutScreenNum);
    }



    equalsBtn.addEventListener("click", doMath);

    clrScreen.addEventListener("click", clearAll);

})();