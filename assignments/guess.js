function checkGuess(guess) {
    var answers = [ "red",
    "green",
    "blue"];
    var index = Math.floor(Math.random() * answers.length);
    if (guess == answers[index]) {
    answer = "You're right! I was thinking of " + answers[index];
    } else {
    answer = "Sorry, I was thinking of " + answers[index];
    }
    return answer;
    }
    var guessInput = document.getElementById("guess");
    var guess = guessInput.value;
    var answer = checkGuess(guess);
    alert(answer);