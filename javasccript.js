let result = document.getElementById("result");
let yourCard = document.getElementById("yourCard");
let sumHtml = document.getElementById("sum");
let compCard = document.getElementById("compCard");
let compSumHtml = document.getElementById("compSum");

let userCardArray = [drawCard(), drawCard()];
let compCardArray = [drawCard(), drawCard()];
let userSum = 0;
let compSum = 0;
let hasBlackJack = false;
let isUserAlive = true;
let isCompAlive = true;
let message = "";

showUserCard();

function gameUser() {
  if (userSum < 21) {
    message = "Do you want to continue playing or hold";
  } else if (userSum === 21) {
    message = "You Win!";
    blockBtn()
    hasBlackJack = true;
    isUserAlive = false;
  } else {
    message = "You are out";
    isUserAlive = false;
    blockBtn()
  }
  result.textContent = message;
}

function gameComp() {
  if (compSum > userSum && compSum <= 21) {
    message = "Computer has Won";
  } else if (compSum < 21 && compSum < userSum) {
    addCompCard();
  } else {
    message = "Player has Won";
  }
  result.textContent = message;
}

function showUserCard() {
  yourCard.textContent = "";
  userSum = 0;

  for (let i = 0; i < userCardArray.length; i++) {
    yourCard.textContent += userCardArray[i] + " ";
    userSum += userCardArray[i];
  }
  sumHtml.textContent = userSum;
  gameUser();
}

function showCompCard() {
  compSum = 0;
  compCard.textContent = "";
  compCard.textContent = ""; // Clear previous content
  for (let i = 0; i < compCardArray.length; i++) {
    compCard.textContent += compCardArray[i] + " ";
    compSum += compCardArray[i];
  }
  compSumHtml.textContent = compSum;
  gameComp();
}

function addUserCard() {
  if (isUserAlive) {
    let newCard = drawCard();
    userCardArray.push(newCard);
    showUserCard();
  } else {
    result.textContent = "You are already out";
  }
}

function addCompCard() {
  if (isCompAlive) {
    let newCard = drawCard();
    compCardArray.push(newCard);
    showCompCard();
  } else {
    result.textContent = "Computer is already out";
  }
}

function reset() {
  userCardArray = [drawCard(), drawCard()];
  compCardArray = [drawCard(), drawCard()];
  userSum = 0;
  compSum = 0;
  hasBlackJack = false;
  isUserAlive = true;
  isCompAlive = true;
  message = "";
  yourCard.textContent = "";
  sumHtml.textContent = "";
  result.textContent = "";
  document.getElementById("addbtn-el").removeAttribute("disabled");
  document.getElementById("hold").removeAttribute("disabled");
  showUserCard();
  compCard.textContent = ""
}

function drawCard() {
  return Math.floor(Math.random() * 14 + 1);
}

function hold() {
  document.getElementById('addbtn-el').setAttribute("disabled", "disabled");
  isUserAlive = false;
  showCompCard();
  gameComp();
}
function blockBtn(){
  document.getElementById("addbtn-el").setAttribute("disabled", "disabled");
  document.getElementById("hold").setAttribute("disabled", "disabled");
}