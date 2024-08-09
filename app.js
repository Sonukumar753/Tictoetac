let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#Reset");
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count = 0;
const winPattren = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkwinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = `Game was Draw.`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (Winner) => {
  msg.innerText = `Congratulation,Winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkwinner = () => {
  for (pattern of winPattren) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};
const resetGame = () => {
  turno = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
newGamebtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
