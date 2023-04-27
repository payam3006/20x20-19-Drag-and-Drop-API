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
    <div id="item${
      i + 1
    }" class="item" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)"
    ondragleave="leave(event)" ondrop="drop(event)">
        <p class="text">${randomisedTop10[i]}</p>
        <div id="dragBtn${
          i + 1
        }" class="dragBtn"><i class="fa fa-reorder"></i></div>
    </div>`;
  }
};

fillList();

///////////////////////check!///////////////////////////
function checkItems() {
  for (let i = 0; i < 10; i++) {
    let text = document
      .getElementById(`item${i + 1}`)
      .getElementsByTagName("p")[0];
    // q(text);
    if (text.innerText == top10[i].name) {
      text.classList.add("correct");
      text.classList.remove("incorrect");
    } else {
      text.classList.add("incorrect");
      text.classList.remove("correct");
    }
  }
}

///////////////////////drag and drop...///////////////////
const drag = (eve) => {
  eve.dataTransfer.setData("originId", eve.target.id);
  eve.dataTransfer.setData(
    "originText",
    document.getElementById(`${eve.target.id}`).getElementsByTagName("p")[0]
      .innerText
  );

  // q(eve.dataTransfer.getData("originId"));
};

const drop = (eve) => {
  eve.preventDefault();
  // q(`${eve.target.id}`);
  // q(`${eve.currentTarget.id}`);
  document
    .getElementById(`${eve.currentTarget.id}`)
    .classList.remove("dropOver");

  let originId = eve.dataTransfer.getData("originId");
  let originText = eve.dataTransfer.getData("originText");
  let targetText = document
    .getElementById(`${eve.currentTarget.id}`)
    .getElementsByTagName("p")[0].innerText;

  document
    .getElementById(`${originId}`)
    .getElementsByTagName("p")[0].innerText = targetText;

  document
    .getElementById(`${eve.currentTarget.id}`)
    .getElementsByTagName("p")[0].innerText = originText;
};

const allowDrop = (eve) => {
  eve.preventDefault();
  document.getElementById(`${eve.currentTarget.id}`).classList.add("dropOver");
  // eve.dataTransfer.dropEffect = "move";
};

const leave = (eve) => {
  eve.preventDefault();
  document
    .getElementById(`${eve.currentTarget.id}`)
    .classList.remove("dropOver");
};
