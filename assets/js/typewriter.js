document.addEventListener("DOMContentLoaded", function() {
    // Define the list of words
    var words = ["Student", "Data Scientist", "Software Engineer", "Sports and Poker Fanatic"];

    var typedElement = document.getElementById('typed-output');
    var wordIndex = 0;
    var letterIndex = 0;

    function typeNextWord() {
        var word = words[wordIndex];
        if (letterIndex < word.length) {
            typedElement.textContent += word.charAt(letterIndex);
            letterIndex++;
            setTimeout(typeNextWord, 20); // Adjust the speed here
        } else {
            setTimeout(backspaceWord, 2000); // Delay before backspacing
        }
    }

    function backspaceWord() {
        if (letterIndex >= 0) {
            typedElement.textContent = typedElement.textContent.slice(0, -1);
            letterIndex--;
            setTimeout(backspaceWord, 12); // Adjust the speed here
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeNextWord, 1000); // Delay before typing the next word
        }
    }

    // Start the animation
    typeNextWord();
});
