// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector(".msg");
// let turnO = true; // Player O's turn initially
// const WinPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// // Function to reset the game
// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };

// // Add event listener to each box
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         if (turnO == true) { // Check if it's player O's turn
//             box.innerText = "O";
//             turnO = false; // Switch to player X's turn
//         } else { // If it's player X's turn
//             box.innerText = "X";
//             turnO = true; // Switch to player O's turn
//         }
//         box.disabled = true; // Disable the box after it's clicked
//         checkWinner();
//     });
// });

// // Function to disable all boxes
// const disableBoxes = () => {
//     boxes.forEach((box) = () => {
//         box.setAttribute("data-disabled", "true");
//         box.classList.add("disabled");
//     });
// };

// // Function to enable all boxes and reset their text
// const enableBoxes = () => {
//     boxes.forEach((box) => {
//         box.removeAttribute("data-disabled");
//         box.classList.remove("disabled");
//         box.innerText = "";
//     });
// };

// //function to check for tie
// const checkTie = () => {
//     const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
//     if (allFilled) {
//         msg.innerText = "It's a tie!";
//         msgContainer.classList.remove("hide");
//     }
// };

// // Function to show the winner message and disable boxes
// const showWinner = (winner) => {
//     msg.innerText = `Congratulations, winner is ${winner}`; // Corrected template literal
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

// // Function to check the winner based on WinPatterns
// const checkWinner = () => {
//     for (let pattern of WinPatterns) {
//         const [a, b, c] = pattern;
//         const pos1val = boxes[pattern[a]].innerText;
//         const pos2val = boxes[pattern[b]].innerText;
//         const pos3val = boxes[pattern[c]].innerText;

//         // Check if all three positions have non-empty values and match
//         if (pos1val != "" && pos2val != "" && pos3val != "") {
//             if (pos1val && pos1val === pos2val && pos2val === pos3val) {
//                 console.log("winner", pos1val);
//                 showWinner(pos1val); // Display the winner
//                 return; // stop further checking
//             }
//         }

//     }
//     checkTie();
// };

// // Add event listeners for resetting the game
// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); // Changed to use the correct ID selector
let heading = document.querySelector("h1"); // Select the heading element
let turnO = true; // Player O's turn initially
const WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function to reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = ""; // Clear the message content
    heading.innerText = "Tic-Tac-Toe"; // Reset heading to default
};

// Function to disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.setAttribute("disabled", "true");
        box.classList.add("disabled");
    });
};

// Function to enable all boxes and reset their text
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.removeAttribute("disabled");
        box.classList.remove("disabled");
        box.innerText = "";
    });
};

// Function to check for a tie
const checkTie = () => {
    const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "It's a tie!";
        heading.innerText = "It's a Tie!"; // Update heading for a tie
        msgContainer.classList.remove("hide");
        disableBoxes(); // Disable all boxes
    }
};

// Function to show the winner message and disable boxes
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;

    heading.innerText = `Winner: ${winner}!`; // Update heading with the winner
    msgContainer.classList.remove("hide");
    disableBoxes(); // Disable all boxes
};

// Function to check the winner based on WinPatterns
const checkWinner = () => {
    for (let pattern of WinPatterns) {
        const [a, b, c] = pattern;
        const pos1val = boxes[a].innerText;
        const pos2val = boxes[b].innerText;
        const pos3val = boxes[c].innerText;

        // Check if all three positions have the same non-empty value
        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val); // Display the winner
            return; // Stop further checking
        }
    }
    checkTie(); // Check for a tie if no winner is found
};

// Add event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.getAttribute("disabled")) {
            box.innerText = turnO ? "O" : "X"; // Set the symbol
            turnO = !turnO; // Switch turn
            box.setAttribute("disabled", "true"); // Disable the clicked box
            checkWinner(); // Check the winner or tie
        }
    });
});

// Add event listeners for resetting the game
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
    box.addEventListener("touchstart", handleBoxClick);
});

function handleBoxClick(event) {
    if (!event.target.getAttribute("disabled")) {
        event.target.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        event.target.setAttribute("disabled", "true");
        checkWinner();
    }
}

