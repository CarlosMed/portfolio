var currentText = 0;
var headerText = [
    "But most of all I have Fun!",
    "I'm Carlos",
    "I love to Design...",
    "I love to Develop...",
    "I like to Git Init...",
    "I tend to Commit..."
];
var divText = document.getElementById("text-to-toggle");

document.onload = setTimeout(function(){changeHeaderText();}, 1000);
function changeHeaderText() {
    currentText++;
    currentText %= headerText.length;

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
