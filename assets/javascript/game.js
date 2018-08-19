$(document).ready(function() {
    var words = {
        w1: "montgomery",
        w2: "juneau",
        w3: "pheonix",
        w4: "little rock",
        w5: "sacramento",
        w6: "denver",
        w7: "hartford",
        w8: "dover",
        w9: "tallahassee",
        w10: "atlanta",
        w11: "honolulu",
        w12: "boise",
        w13: "springfield",
        w14: "indianapolis",
        w15: "des moines",
        w16: "topeka",
        w17: "frankfort",
        w18: "baton rouge",
        w19: "augusta",
        w20: "annapolis",
        w21: "boston",
        w22: "lansing",
        w23: "st paul",
        w24: "jackson",
        w25: "jefferson city",
        w26: "helena",
        w27: "lincoln",
        w28: "carson city",
        w29: "concord",
        w30: "trenton",
        w31: "santa fe",
        w32: "albany",
        w33: "raleigh",
        w34: "bismarck",
        w35: "columbus",
        w36: "oklahoma city",
        w37: "salem",
        w38: "harrisburg",
        w39: "providence",
        w40: "columbia",
        w41: "pierre",
        w42: "nashville",
        w43: "austin",
        w44: "salt lake city",
        w45: "montpelier",
        w46: "richmond",
        w47: "olympia",
        w48: "charleston",
        w49: "madison",
        w50: "cheyenne"
    };

    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var guessedLetters = [];
    var displayWord = [];
    var wordIndex = 0;
    var wordPicked = "";
    var playerGuess = "";
    var gameStarted = false;
    var wordArray = [words.w1, words.w2, words.w3, words.w4, words.w5, words.w6, words.w7, words.w8, words.w9, words.w10, words.w11, words.w12,words.w13, words.w14, words.w15, words.w16, words.w17, words.w18, words.w19, words.w20, words.w21, words.w22, words.w23, words.w24, words.w25, words.w26, words.w27, words.w28, words.w29, words.w30, words.w31, words.w32, words.w33, words.w34, words.w35, words.w36, words.w37, words.w38, words.w39, words.w40, words.w41, words.w42, words.w43, words.w44, words.w45, words.w46, words.w47, words.w48, words.w49, words.w50];

    pickWord();

    function pickWord() {
        if ( gameStarted == false) {
            wordIndex = Math.floor(Math.random() * wordArray.length);
            wordPicked = wordArray[wordIndex];
            for (var i = 0; i < wordPicked.length; i++) {
                if ( wordPicked[i] == " ") {
                    displayWord[i] = "   ";
                }
                else {
                    displayWord[i] = "_ ";
                }
                $("#currentWord").html("Current Word: " + displayWord.join(""));
            }
        }
        gameStarted == true;
    }

     function evaluateGuess() {
            var positions = [];
            for (var i = 0; i < wordPicked.length; i++) {
                if (wordPicked[i] === playerGuess) {
                    positions.push(i);
                    displayWord[i] = playerGuess;
                    $("#currentWord").html("Current Word: " + displayWord.join(""));
                }
            }
            if (positions.length <= 0) {
                guesses--;
                $("#guessesRemaining").html("Guesses Remaining: " + guesses);
            }
        }

    function checkWin() {
        if (displayWord.indexOf("_ ") === -1) {
            wins++;
            $("#wins").html("Wins: " + wins);
            resetGame();
        }
        if ( guesses == 0 ) {
            losses++;
            $("#losses").html("Losses: " + losses);
            resetGame();
        }
    }

    function resetGame() {
        guesses = 10;
        $("#guessesRemaining").html("Guesses Remaining: " + guesses);
        guessedLetters = [];
        $("#lettersGuessed").html("Letters Guessed: " + guessedLetters);
        displayWord = [];
        $("#currentWord").html("Current Word: " + displayWord.join(""));
        gameStarted = false;
        pickWord();
    }

    $(document).keyup( function(event) {
        $("#alert").html("");
        var letter = event.which;
        playerGuess = String.fromCharCode(letter).toLowerCase();
        displayLetter = playerGuess.toUpperCase();
        if ( playerGuess >= "a" && playerGuess <= "z" ) {
            if (guessedLetters.indexOf(displayLetter) === -1) {
                guessedLetters.push(" " + displayLetter);
                $("#lettersGuessed").html("Letters Guessed: " + guessedLetters);
                evaluateGuess(); 
                checkWin();
            }
            else {
                $("#alert").html("You've already guessed that letter!");
            }
        }
    }) 
})