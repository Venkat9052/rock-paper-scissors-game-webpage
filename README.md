# rock-paper-scissors-game-webpage
🪨 📄 ✂️ Rock Paper Scissors Game
A fun and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. This is a classic 1-vs-CPU game where you compete against the computer with real-time score tracking and instant result display.

🎮 Live Preview
(Add this once you host it on GitHub Pages or any deployment platform)
Example: https://your-username.github.io/rock-paper-scissors/

📌 Features
🔘 Clickable UI for selecting rock, paper, or scissors

🖥️ Randomized computer choice every round

🧠 Game logic to determine win/loss/draw

🧾 Real-time score updates for player and computer

🎨 Visual feedback on win/loss with color-coded message

💾 Lightweight, no frameworks, pure JavaScript

📁 Project Structure
bash
Copy
Edit
rock-paper-scissors/
├── index.html         # Main HTML structure
├── style.css          # Custom styles
├── script.js          # Game logic and interactions
└── images/
    ├── rock.jpeg
    ├── paper.jpeg
    └── scissor.jpeg
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors
2. Open in Browser
Just open the index.html file in your browser:

bash
Copy
Edit
start index.html     # Windows
open index.html      # macOS
🧠 How It Works
User clicks one of the choices (rock/paper/scissors).

A random computer choice is generated using Math.random().

The result is calculated based on the classic rules:

Rock beats Scissors

Scissors beats Paper

Paper beats Rock

Scores are updated and displayed.

Message changes background color: green (win), red (loss), black (draw).

🛠️ Tech Used
HTML5

CSS3

JavaScript (Vanilla)

DOM manipulation

local images/ directory for icons
