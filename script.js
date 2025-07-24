let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");

let winner_msg = document.querySelector("#show-winner");

let user_win_count = document.querySelector("#user-score");
let comp_win_count = document.querySelector("#computer-score");

// returns users choice
choices.forEach((val, idx) => {
  choices[idx].addEventListener("click", () => {
    const user_choice = choices[idx].getAttribute("id");
    playgame(user_choice);
  });
});

//function to generate computer choices
let gencomp_choice = () => {
  let shapes = ["rock", "paper", "scissor"];
  let val = Math.floor(Math.random() * 3);
  const comp_choice = shapes[val];
  return comp_choice;
};
//code  for draw condition
const draw = () => {
  console.log("match is draw");
};

const playgame = (user_choice) => {
  //prints user choice

  console.log("user_choice=", user_choice);

  //generate computer choice

  const computer_choice = gencomp_choice();
  console.log("computer-choice=", computer_choice);

  if (computer_choice === user_choice) {
    draw();
    winner_msg.innerText = "match is draw";
    winner_msg.style.background = "black";
  } else {
    if (user_choice === "rock") {
      // paper or scissors
      user_win = computer_choice == "scissor" ? true : false;
    } else if (user_choice === "paper") {
      //rock or scissors
      user_win = computer_choice == "rock" ? true : false;
    } else {
      //rock or paper
      user_win = computer_choice == "rock" ? false : true;
    }
    console.log(user_win);
    show_winner(user_win, user_choice, computer_choice);
  }
};

//shows final result who will won either user or computer

show_winner = (user_win, user_choice, computer_choice) => {
  if (user_win) {
    winner_msg.style.background = "green";
    winner_msg.innerText = `hurrah you win your ${user_choice} choice beaten ${computer_choice} `;
    user_score += 1;
    user_win_count.innerText = user_score;
  } else {
    winner_msg.style.background = "red";
    winner_msg.innerText = `oops! you lost your ${user_choice} choice beaten by ${computer_choice} `;
    comp_score += 1;
    comp_win_count.innerText = comp_score;
  }
};
