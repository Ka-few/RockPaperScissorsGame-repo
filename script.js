//Choices and result elements
const userChoiceDisplay = document.getElementById("userChoice").querySelector("span");
const computerChoiceDisplay = document.getElementById("computerChoice").querySelector("span");
const gameResultDisplay = document.getElementById("gameResult").querySelector("span");

//Choices array
const choices = ["Rock", "Paper", "Scissors"];

//Add event listeners to buttons
document.querySelectorAll(".choice").forEach((button)=>{
    button.addEventListener("click", ()=> {
        const userChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1)
        const computerChoice = getComputerChoice()
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = userChoice;

        updateComputerChoiceDisplay(computerChoice)
        gameResultDisplay.textContent = result

    })
})

//Get computer choice
function getComputerChoice(){
    const randomindex = Math.floor(Math.random() * choices.length)
    return choices[randomindex];
}

// Update computer choice display function
function updateComputerChoiceDisplay(computerChoice) {
    const iconMap = {
        Rock: "✊",
        Paper: "✋",
        Scissors: "✌️",
    };

    document.getElementById("computerChoiceIcon").textContent = iconMap[computerChoice];
    computerChoiceDisplay.textContent = computerChoice;
}

//Determine the result
function getResult(userChoice, computerChoice) {
    if(userChoice === computerChoice) return "It's a draw!"
    if((userChoice === "Rock" && computerChoice === "Scissors") || 
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice ==="paper")
) {
    return "You Win!";
    }else {
        return "You lose!"
    }

}