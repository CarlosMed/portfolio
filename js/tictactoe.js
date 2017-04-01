var Game = function () {
    this.initialize();
};

Game.prototype.playerX = "carlos";
Game.prototype.playerO = "daniel";
Game.prototype.playerXScore = 0;
Game.prototype.playerOScore = 0;
Game.prototype.play = false;

Game.prototype.whosTurn = "";

Game.prototype.initialize = function () {
    var play = document.querySelector("#start");
    var reset = document.querySelector("#reset");

    play.addEventListener("click", this.beginGame, false);
    reset.addEventListener("click", this.resetGame, false);
};

Game.prototype.beginGame = function (e) {
    e.preventDefault();
    var thisObject = Game.prototype;
    var playerXName = document.querySelector("#playerOne").value;
    var playerOName = document.querySelector("#playerTwo").value;

    thisObject.playerX = playerXName;
    thisObject.playerO = playerOName;

    thisObject.setup();
};

Game.prototype.resetGame = function (e) {

};

Game.prototype.setup = function () {
    var selectPlayerX = document.querySelectorAll(".playerOne");
    var selectPlayerO = document.querySelectorAll(".playerTwo");
    var tabelCells = document.querySelectorAll("td");
    //  Clearing Cells
    for (var i = 0; i < tabelCells.length; i++) {
        tabelCells[i].textContent = "";
        tabelCells[i].addEventListener("click", this.logic, false);
    };

    selectPlayerX[0].textContent = this.playerX;
    selectPlayerX[1].textContent = this.playerXScore;
    selectPlayerO[0].textContent = this.playerO;
    selectPlayerO[1].textContent = this.playerOScore;

    this.whoGoesFirst();
}

Game.prototype.whoGoesFirst = function () {
    var value = Math.random() * 2;
    value = Math.round(value);

    this.displayText(value > 1 ? "Player " + this.playerX + "'s turn" : "Player " + this.playerO + "'s turn");

    this.whosTurn = (value > 1) ? "x" : "o";
}

Game.prototype.displayText = function (text) {
    document.querySelector("#game-text").textContent = text;
}

Game.prototype.logic = function (e) {
    var thisObject = Game.prototype;
    e.target.textContent = thisObject.whosTurn;
    thisObject.whosTurn = thisObject.whosTurn === "x" ? "o" : "x";
    thisObject.displayText(thisObject.whosTurn === "o" ? "Player " + thisObject.playerX + "'s turn" : "Player " + thisObject.playerO + "'s turn");
    e.target.removeEventListener("click", thisObject.logic, false);

    var win = thisObject.isGameOver();

    if (win !== false) {
        switch (win) {
            case "x":
                thisObject.displayText("Player 1 Wins");
                break;
            case "o":
                thisObject.displayText("Player 2 Wins");
                break;
        }

    }
}

Game.prototype.isGameOver = function () {
    var topRow = this.topRowWins();
    var middleRow = this.middleRowWins();
    var bottomRow = this.bottomRowWins();
    var diagnolWinsLeft = this.diagnolWinsLeft();
    var diagnolWinsRight = this.diagnolWinsRight();

    if (topRow !== false) {
        return topRow;
    } else if (middleRow !== false) {
        return middleRow;
    } else if (bottomRow !== false) {
        return bottomRow;
    } else if (diagnolWinsLeft !== false) {
        return diagnolWinsLeft;
    } else if (diagnolWinsRight !== false) {
        return diagnolWinsRight;
    } else {
        return false;
    }
}

Game.prototype.topRowWins = function () {
    var topRow = document.querySelectorAll(".top");

    var x = 0;
    var o = 0;
    for (var i = 0; i < topRow.length; i++) {
        x = (topRow[i].textContent === "x") ? x + 1 : x;
        o = (topRow[i].textContent === "o") ? o + 1 : o;

    }

    if (x === 3) {
        return "x";
    } else if (o === 3) {
        return "o";
    } else {
        return false;
    }
}

Game.prototype.middleRowWins = function () {
    var middleRow = document.querySelectorAll(".middle");

    var x = 0;
    var o = 0;
    for (var i = 0; i < middleRow.length; i++) {
        x = (middleRow[i].textContent === "x") ? x + 1 : x;
        o = (middleRow[i].textContent === "o") ? o + 1 : o;

    }

    if (x === 3) {
        return "x";
    } else if (o === 3) {
        return "o";
    } else {
        return false;
    }
}

Game.prototype.bottomRowWins = function () {
    var bottomRow = document.querySelectorAll(".bottom");

    var x = 0;
    var o = 0;
    for (var i = 0; i < bottomRow.length; i++) {
        x = (bottomRow[i].textContent === "x") ? x + 1 : x;
        o = (bottomRow[i].textContent === "o") ? o + 1 : o;

    }

    if (x === 3) {
        return "x";
    } else if (o === 3) {
        return "o";
    } else {
        return false;
    }
}

Game.prototype.diagnolWinsLeft = function () {
    var topLeft = document.querySelector("#t-left");
    var center = document.querySelector("#m-middle");
    var bottomRight = document.querySelector("#b-right");
    var boxes = [topLeft, center, bottomRight];
    var x = 0;
    var o = 0;

    for (var i = 0; i < boxes.length; i++) {
        x = (boxes[i].textContent === "x") ? x + 1 : x;
        o = (boxes[i].textContent === "o") ? o + 1 : o;

    }

    if (x === 3) {
        return "x";
    } else if (o === 3) {
        return "o";
    } else {
        return false;
    }
}

Game.prototype.diagnolWinsRight = function () {
    var topRight = document.querySelector("#t-right");
    var center = document.querySelector("#m-middle");
    var bottomLeft = document.querySelector("#b-left");
    var boxes = [topRight, center, bottomLeft];
    var x = 0;
    var o = 0;

    for (var i = 0; i < boxes.length; i++) {
        x = (boxes[i].textContent === "x") ? x + 1 : x;
        o = (boxes[i].textContent === "o") ? o + 1 : o;

    }

    if (x === 3) {
        return "x";
    } else if (o === 3) {
        return "o";
    } else {
        return false;
    }
}

var game = new Game();