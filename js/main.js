var currentText = 0;
var headerText = [" Design...", " Develop...", " Git Init...", " Commit...", " Have Fun!"];
var divText = document.getElementById("text-to-toggle");

document.onload = setTimeout(function(){changeHeaderText();}, 1000);
function changeHeaderText() {
        if (currentText === headerText.length - 1) currentText = 0;
        else currentText += 1;

        deleteHeaderText();
    }

function deleteHeaderText() {
        if (divText.innerHTML.length === 0) setTimeout(function(){typeHeaderText();}, 100);

        else {
            divText.innerHTML = divText.innerHTML.substring(0, divText.innerHTML.length - 1);

            setTimeout(function(){deleteHeaderText();}, 100);
        }
 }

function typeHeaderText() {
    if (divText.innerHTML.length === headerText[currentText].length) setTimeout(function(){changeHeaderText();}, 2000);

    else {

        divText.innerHTML = headerText[currentText].substring(0, divText.innerHTML.length + 1);

        setTimeout(function(){typeHeaderText();}, 100);
    }
}
