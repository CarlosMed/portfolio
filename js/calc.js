var allBtn = document.querySelectorAll('#numbers button');

var click = function(e) {
    var content = e.target.getAttribute('value');
    var inputP = document.querySelector('#input');

    if (e.target.getAttribute("id") === "clear") {
        document.querySelector('#input').innerHTML = "";
        document.querySelector('#equation').innerHTML = "";
        return;
    }

    if (e.target.getAttribute("id") === "del") {
       var length = inputP.textContent.length;
       inputP.textContent = inputP.textContent.substr(0, length -1);
       return;
    }

    if (content === "=") {
        var equation = inputP.textContent;

        if (equation.indexOf('+') !== -1) {
            var signPosition = equation.indexOf('+');
            var firstPath = equation.substr(0, signPosition);
            var secondPath = equation.substr(signPosition + 1);
            var result = (parseInt(firstPath) + parseInt(secondPath));
            var equationElement = document.querySelector('#equation');

            equationElement.textContent = equation;

            inputP.textContent = result;

        } else if (equation.indexOf('-') !== -1) {
            var signPosition = equation.indexOf('-');
            var firstPath = equation.substr(0, signPosition);
            var secondPath = equation.substr(signPosition + 1);
            var result = parseInt(firstPath) - parseInt(secondPath);
            var equationElement = document.querySelector('#equation');

            equationElement.textContent = equation;

            inputP.textContent = result;

        } else if (equation.indexOf('*') !== -1) {
            var signPosition = equation.indexOf('*');
            var firstPath = equation.substr(0, signPosition);
            var secondPath = equation.substr(signPosition + 1);
            var result = parseInt(firstPath) * parseInt(secondPath);
            var equationElement = document.querySelector('#equation');

            equationElement.textContent = equation;

            inputP.textContent = result;

        } else if (equation.indexOf('/') !== -1) {
            var signPosition = equation.indexOf('/');
            var firstPath = equation.substr(0, signPosition);
            var secondPath = equation.substr(signPosition + 1);
            var result = parseInt(firstPath) / parseInt(secondPath);
            var equationElement = document.querySelector('#equation');

            equationElement.textContent = equation;

            inputP.textContent = result;
        }
        return;
    }

    inputP.textContent += content;
};

for (var i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', click, false);

}
var plus = document.querySelector('#plus');
plus.addEventListener('click', click, false);
var equal = document.querySelector('#equal');
equal.addEventListener('click', click, false);
var del = document.querySelector('#del');
del.addEventListener('click', click, false);
var clear = document.querySelector('#clear');
clear.addEventListener('click', click, false);
var zero = document.querySelector('#zero');
zero.addEventListener('click', click, false);
