const q = console.log;

const top10 = [
  { name: "Bernard Arnault", rank: 1 },
  { name: "Elon Musk", rank: 2 },
  { name: "Jeff Bezos", rank: 3 },
  { name: "Bill Gates", rank: 4 },
  { name: "Warren Buffett", rank: 5 },
  { name: "Larry Ellison", rank: 6 },
  { name: "Steve Ballmer", rank: 7 },
  { name: "Larry Page", rank: 8 },
  { name: "Sergey Brin", rank: 9 },
  { name: "Francoise Bettencourt Meyers", rank: 10 },
];
////////////////////randomise list//////////////////////////
let randomisedTop10 = [];
let ii = 0;
let numOfMembers = 0;
while (numOfMembers < 10) {
  let j = Math.floor(Math.random() * 10);
  if (!randomisedTop10[j]) {
    randomisedTop10[j] = top10[ii].name;
    numOfMembers += 1;
  } else {
    ii -= 1;
  }
  ii += 1;
}

///////////////////fill list in html///////////////////
const mainContainer = document.getElementById("mainContainer");

const fillList = () => {
  for (let i = 0; i < 10; i++) {
    mainContainer.innerHTML += `<div class="num">${i + 1}</div>
    <div id="item${i + 1}" class="item">
        <p>${randomisedTop10[i]}</p>
        <div id="dragBtn${
          i + 1
        }" class="dragBtn"><i class="fa fa-reorder"></i></div>
    </div>`;
  }
};

fillList();
