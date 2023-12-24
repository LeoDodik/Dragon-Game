//DECLARING VARIABLES NEEDED FOR THE GAME
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//SELECTING BUTTONS USING DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


//USING DOM TO SELECT CERTAIN IDS
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;



//STORES GOTOWN AND GOSTORE 
function update(location) {
    button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
      button1.onclick = goStore;
      button2.onclick = goCave;
      button3.onclick = fightDragon;
      text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    
    button1.innerText = "Buy 10 health (10 gold)";
      button2.innerText = "Buy weapon (30 gold)";
      button3.innerText = "Go to town square";
      button1.onclick = buyHealth;
      button2.onclick = buyWeapon;
      button3.onclick = goTown;
      text.innerText = "You enter the store.";
    }
//WHEN YOU GO TO TOWN FUNCTION
function goTown() {
    
  }

//FUNCTIONS THAT ARE ASSIGNED WHEN CLICKED
function goStore() {
    
  }
  
  function goCave() {
    console.log("Going to cave.");
}

function fightDragon(){
  console.log("Fighting dragon.");
}


//FUNCTIONS FOR ENTERING THE STORE
function buyHealth(){

}

function buyWeapon(){

}

//LITTLE "DATABASE" TO NOT REPEAT FUNCTIONS
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },

    {
name: "store",
"button text": ["Buy 10 health (10 gold)","Buy weapon (30 gold)", "Go to town square"],
"button functions":[buyHealth,buyWeapon,goTown],
text: "You enter the store."
    }
];
