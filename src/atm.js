// VISUAL ATM SYSTEM
// INSTRUCTIONS: Fill in the missing logic pieces inside wher there are Task comments!


// 1. Selecting the visual HTML pieces
const atmInput = document.getElementById("atm-input");
const atmBtn = document.getElementById("atm-btn");
const screenTitle = document.getElementById("screen-title");
const screenText = document.getElementById("screen-text");


// TASK 1:
/*
    Set the accountBalance to any number you want (e.g., 1000) 
    and set the correctPin to any 4-digit number (e.g., "1234")
*/
let accountBalance = 50000; // Current Balance
let correctPin = "1307"; // pin

// This keeps track of what the ATM screen is asking for ('PIN' or 'WITHDRAW')
// let currentSystemStep = "PIN"; 
let currentSystemStep = "PIN"; // Tracks whether asking for PIN or Withdraw

// 3. THE TRIGGER: Runs every time the user clicks the SUBMIT button
/*
    Create a function that checks if the user pin has been entered correctly and switches
    the system to the withdraw phase if it has been entered correctly. If not, display an error message.
    If the user has entered the correct pin, check if the withdraw amount is less than or 
    equal to the account balance. If it is, subtract the withdraw amount from the account balance 
    and display a success message. If not, display an error message.
*/
// Function triggered when SUBMIT button is clicked
atmBtn.addEventListener("click", function() {
    let userInput = atmInput.value;

    if (currentSystemStep === "PIN") {
        // Check PIN
        if (userInput === correctPin) {
            screenTitle.textContent = "PIN Accepted✅!";
            screenText.textContent = "Enter amount💲 to withdraw:";
            currentSystemStep = "WITHDRAW";
        } else {
            screenTitle.textContent = "ERROR❌!";
            screenText.textContent = "Incorrect PIN. Try again.";
        }
    } else if (currentSystemStep === "WITHDRAW") {
        // Change input to number
        let withdrawAmount = parseFloat(userInput);

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            screenTitle.textContent = "ERROR!";
            screenText.textContent = "Please enter a valid amount.";
        } else if (withdrawAmount <= accountBalance) {
            accountBalance -= withdrawAmount;
            screenTitle.textContent = "SUCCESS!";
            screenText.textContent = `You withdrew ¢${withdrawAmount}. Remaining balance: ¢${accountBalance}`;
        } else {
            screenTitle.textContent = "ERROR!";
            screenText.textContent = `Insufficient funds. Your current balance is: ¢${accountBalance}`;
        }
    }

    // Clear input after each action
    atmInput.value = "";
});
