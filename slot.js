var fruits = ["🍒", "🍋", "🍇", "🍊", "🍉", "🍓"];

// Player's balance
var balance = 5000;

// Function to get a random fruit
function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

// Function to spin the slot machine
function spin() {
    // Check if the player has enough balance
    if (balance < 1000) {
        alert("Insufficient balance. Please top up.");
        return;
    }

    // Deduct 1000 from the balance
    balance -= 1000;
    updateBalance();

    var slots = document.querySelectorAll('.slot');

    // Display random fruits for each column
    slots.forEach(slot => {
        slot.textContent = getRandomFruit();
    });

    // Check if the player wins
    var isJackpot = true;
    for (var i = 1; i < slots.length; i++) {
        if (slots[i].textContent !== slots[i - 1].textContent) {
            isJackpot = false;
            break;
        }
    }

    if (isJackpot) {
        alert("Jackpot! You won!");
        balance += 5000; // Add 5000 to the balance for winning the jackpot
        updateBalance();
    } else {
        alert("Try again. Better luck next time!");
    }
}

// Function to update the balance displayed on the webpage
function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Function to top up the balance
function topup() {
    var amount = prompt("Enter the amount to top up:");
    amount = parseInt(amount);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        alert("Balance topped up successfully.");
    } else {
        alert("Invalid amount. Please enter a valid amount to top up.");
    }
}
spin()