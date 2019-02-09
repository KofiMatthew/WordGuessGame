//global variables:

var wins = 0;

var guessCount = 12;
var activeWord = "";
var guessList = [];
var complete = 0;

var shadow = [];
var shadowstring;
var wordLength = 0;
var letter = "";

//create an object that contains the basic functions of the game
var game = {

    //array of native Oregon wildlife
    word: ['antelope', 'beaver', 'bobcat', 'cougar', 'deer', 'eagle', 'elk', 'frog', 'hawk', 'lynx', 'moose', 'newt', 'osprey', 'pelican', 'ringtail', 'salamander', 'seal', 'turtle', 'weasel'],
    usedWord: [],

    letsPlay: function () {

        function setUp() {
            if (activeWord === "") {    
                function newWord() {
                    // selects a random word from the list, stores as activeWord, and moves it from word to usedWord list
                    if (game.word.length > 0) {
                        activeWord = game.word[Math.floor(Math.random() * game.word.length)];
                        console.log(activeWord);
                        wordLength = activeWord.length
                        var item = game.word.indexOf(activeWord);
                        game.word.splice(item, 1);
                        game.usedWord.push(activeWord);
                    }
                    else {
                        alert("You've completed the game!");
                    };
                };
                
                function shadowBox() {
                    for (var i = 0; i < wordLength; i++) {
                        shadow[i] = "_";
                    }
        
                    // putting in a string
                    shadowstring = shadow.join(" ");
                    document.getElementById("wordBox").innerHTML = shadowstring;
                };
                shadowBox()
                newWord()
                shadowBox()
            };
        };
        setUp()
        function lettertest() {
            if (guessList.includes(letter)) {
                alert("You already guessed this letter.");
            } else {
                guessList.push(letter);
                guessCount--;
                document.getElementById("guessCount").innerHTML = "Remaining guesses: " + guessCount;
                var guessstring = guessList.join(" ");
                document.getElementById("guesses").innerHTML = "Letters guessed: " + guessstring;
            
                for (var i = 0; i < activeWord.length; i++) {
                    if (activeWord[i] === letter) {
                        shadow[i] = letter;
                        complete++;
                        console.log(complete)
                        console.log(shadow);                      
                    }
                }
                shadowstring = shadow.join(" ");
                console.log(shadowstring)
                document.getElementById("wordBox").innerHTML = shadowstring;
            }; 
        };
        lettertest()

        function reset() {
            activeWord = "";
            guessCount = 12;
            guessList = [];
            complete = 0;
            var guessstring = (" ")
            document.getElementById("guesses").innerHTML = "Letters guessed: " + guessstring;
            var shadowstring = " "
            document.getElementById("wordBox").innerHTML = shadowstring;
        };          
        
        // reset settings  and add win after completion of each word:
        if (complete === activeWord.length) {
            alert(activeWord + "!")
            wins++
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            reset()
            setUp()
        };

        // reset settings if out of guesses
        if (guessCount < 1) {
            alert("You ran out of guesses!")
            reset()
            setUp()
        };
    }
};



// MAIN PROCESS
// ==============================================================================

// Captures keyboard input.
document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    letter = event.key.toLowerCase();

    game.letsPlay()

};


