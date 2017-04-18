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

    // Check if the screen2 have input if yes the user input should go to Screen3
    function outPutScreenNum() {
        if (screenOutPut2.innerHTML) {
            screenOutPut3.innerHTML += (this.value);
        } else {
            screenOutPut.innerHTML += (this.value);
        }
    }

    function outPutScreenOper() {
        if (screenOutPut2.innerHTML) {
            screenOutPut2.innerHTML = (this.value);
        } else {
            screenOutPut2.innerHTML = (this.value);
        }
    }

    function doMath() {
        switch (screenOutPut2.innerHTML) {
            case "+":
                var plusResult = parseFloat(screenOutPut.innerHTML) + parseFloat(screenOutPut3.innerHTML);
                console.log(plusResult);
                break;
            case "-":
                var minusResult = parseFloat(screenOutPut.innerHTML) - parseFloat(screenOutPut3.innerHTML);
                console.log(minusResult);
                break;
            case "*":
                var multyResult = parseFloat(screenOutPut.innerHTML) * parseFloat(screenOutPut3.innerHTML);
                console.log(multyResult);
                break;
            case "/":
                var divResult = parseFloat(screenOutPut.innerHTML) / parseFloat(screenOutPut3.innerHTML);
                console.log(divResult);
        }
    }


    for (var o = 0; o < operators.length; o++) {
        operators[o].addEventListener("click", outPutScreenOper);
    }


    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", outPutScreenNum);
    }

    equalsBtn.addEventListener("click", doMath);


})();