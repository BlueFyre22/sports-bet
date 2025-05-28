console.log("Gambling is fun! 🎰")


let bank = 100;
let wins = 0;
let losses = 0;
let newBank = 0;


const players = [
  { teamNumber: 1, emoji: "🏃‍♂️", skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: "🤾‍♂️", skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: "🏇", skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: "🏌️‍♀️", skill: 15, name: "Javaris Jamar Javarison-Lamar", },
  { teamNumber: 1, emoji: "🏋️‍♂️", skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: "🏌️‍♂️", skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: "🤾", skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: "🏂", skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: "🧘‍♀️", skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: "🚶‍♀️", skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: "🏋️‍♀️", skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: "🤺", skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: "🏄", skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: "🧜‍♂️", skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: "🤸", skill: 47, name: "Scoish Velociraptor Maloish", },
  { teamNumber: 2, emoji: "⛹️‍♀️", skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: "🕴️", skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V", },
  { teamNumber: 2, emoji: "💃", skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: "🧍‍♂️", skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: "🐅", skill: 100, name: "Tiger" },
];

// DRAW FUNCTIONS

function drawBank() {
  document.getElementById("bank").innerHTML = `<span>$</span>` + bank;
  loseCondition();
}

function loseCondition() {
  if (bank <= 0) {
    window.alert("You have lost all your money, sucks to be you!")
    // window.close()  -- dont do this, its mean
    bank = 100
    drawBank()
  } return;
}



// LOGIC FUNCTIONS

function drawTeam1() {
  const team1Container = document.getElementById("team1"); // Grab Where, Team 1 will draw
  let team1Content = ""; // Create empty  container first
  //.. loop through players adding only those on team1
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      team1Content += `<span title="${player.name}">${player.emoji}</span>`
    }
  }
  // console.log(team1Content)
  team1Container.innerHTML = team1Content
}

function drawTeam2() {
  const team2Container = document.getElementById("team2");
  let team2Content = ""

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 2) {
      team2Content += `<span title="${player.name}">${player.emoji}</span>`
    }
  }
  // console.log(team2Content)
  team2Container.innerHTML = team2Content
}



function team1Bet5() {
  let team1Skill = 0;
  let team2Skill = 0;
  players.forEach((player) => {
    // add each players skill to the appropriate variable
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    } else if (player.teamNumber == 2) {
      team2Skill += player.skill
    }
  });

  if (team1Skill > team2Skill) {
    bank += 5
  } else if (team1Skill < team2Skill) {
    bank -= 5
  } else console.log("Was it a tie?")

  drawBank();
  draftTeam();
}

function team2Bet5() {
  team1Skill = 0
  team2Skill = 0
  players.forEach((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    } else if (player.teamNumber == 2) {
      team2Skill += player.skill
    }
  });

  if (team1Skill > team2Skill) {
    bank -= 5
  } else if (team1Skill < team2Skill) {
    bank += 5
  } else console.log("It must have been a tie!!")
  drawBank()
  draftTeam();
}

//this is creating a coin flip scenario 50/50 outcome
function randomNewTeam() {
  const randomNumb = Math.random()
  let newTeamNumber = randomNumb < .5 ? 1 : 2;
  return newTeamNumber
}

function draftTeam() {
  players.forEach((player) => {
    const newTeam = randomNewTeam()
    player.teamNumber = newTeam
    // console.log(`${player.name} is now playing for team ${player.teamNumber}`)
  })
  drawTeam1()
  drawTeam2()
}


function drawHighScore() {
  document.getElementById("high-score").innerHTML = localStorage.getItem("high-score")
}



function team2BetAll() {
  team1Skill = 0
  team2Skill = 0
  players.forEach((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    } else if (player.teamNumber == 2) {
      team2Skill += player.skill
    }
  });

  if (team1Skill > team2Skill) {
    bank = 0
  } else if (team1Skill < team2Skill) {
    bank += bank
  } else console.log("It must have been a tie!!")
  drawBank()
  draftTeam();
}

function teamBet(team, betAmount) {
  team1Skill = 0
  team2Skill = 0
  if (betAmount > bank) {
    window.alert("You dont have that much money! Try again")
    return;
  }

  players.forEach((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    } else if (player.teamNumber == 2) {
      team2Skill += player.skill
    }
  });
  if ((team == 'team1' && team1Skill > team2Skill) || (team == 'team2' && team2Skill > team1Skill)) {
    let newScore = betAmount + bank
    highScore(newScore);
    bank += betAmount
  } else if ((team == 'team1' && team1Skill < team2Skill) || (team == 'team2' && team2Skill < team1Skill)) {
    bank -= betAmount
  } else console.log("It must have been a tie!!")
  drawBank()
  draftTeam();
}

function highScore(newBank) {
  let highScore = localStorage.getItem("high-score")

  if (newBank > highScore) {
    localStorage.setItem("high-score", newBank)
    drawHighScore()
    // document.getElementById("high-score").innerHTML = `<span>$</span>` + newBank
  }
}
drawHighScore()
draftTeam()
