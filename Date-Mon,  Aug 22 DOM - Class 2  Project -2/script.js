document.getElementById("btn").addEventListener("click", () => {
  let randomNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(randomNumber);
  let userGuess = parseInt(document.getElementById("guessInput").value);
  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert(
      "Better Luck Next Time. The correct number was " + randomNumber + "."
    );
  }
});
