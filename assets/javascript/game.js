//global variables:

var wins = 0;

var guessCount = 12;
var activeWord = "";
var guessList = [];
var complete = 0;

var shadow = " _ ";
var letter = "";


//create an object that contains the basic functions of the game
var game = {

    word: ['aardvark', 'baby', 'cactus'],
    usedWord: [], 
    index: 0,
    replace: 0,
    
    madLib: {
        4: " _ _ _ _",
        5: " _ _ _ _ _",
        6: " _ _ _ _ _ _",
        7: " _ _ _ _ _ _ _",
        8: " _ _ _ _ _ _ _ _",
        9: " _ _ _ _ _ _ _ _ _",
        10:" _ _ _ _ _ _ _ _ _ _",
        11:" _ _ _ _ _ _ _ _ _ _ _",
        12:" _ _ _ _ _ _ _ _ _ _ _ _"
    },
    

    // selects a random word from the list, stores as activeWord, and moves it from word to usedWord list:
    wordSelect: function() {         
        if (this.word.length > 0) {
            activeWord = this.word[Math.floor(Math.random() * this.word.length)];
            console.log(activeWord);
            var item = this.word.indexOf(activeWord);
            this.word.splice(item,1);
            this.usedWord.push(activeWord);
            console.log(this.word);
            console.log(this.usedWord)
        }
        /* else {
            <break>
        } */
    },        
    letterTest: function() {
        var chars = activeWord.length; complete = activeWord.length;
        console.log(chars)
        shadow =game.madLib[chars];
        document.getElementById("textarea").value = shadow;

        if (activeWord.includes(letter)) {

            for (var i = 0; i < chars;  i++) {
                game.index = activeWord.indexOf(letter,i);
                game.replace = ((game.index + 1) * 2);
                game.fillBlank();                
            }

        }

        else if (guessList.includes(letter)) {
            alert("You already guessed this letter.");        
        }

        else {
            guessList.push(letter);
  
        }
        },
        
        fillBlank: function () {
            shadow.splice(game.replace,1,letter);
            complete--;
        }
    }        

    //sub-function - creates a string to represent the word
//function 2 - validates the guess
//function 3 - compares 





 // MAIN PROCESS
      // ==============================================================================

      // Captures keyboard input.
      document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        letter = event.key.toLowerCase();

        game.wordSelect()

        game.letterTest()
    
    };


