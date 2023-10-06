let onLoad = () => {
  alert("Player 1 is batting and has 3 players");
};

let pcBalled;
function pcRandomNo() {
  pcBalled = document.querySelector(".result");
  let PCrun = Math.ceil(Math.random() * 6);
  pcBalled.innerHTML = PCrun;
  return PCrun;
}
// let a = pcRandomNo();
// console.log(a);

let p1total = document.querySelector(".p1-total");

let p1Score = 0;
let p1BatsmanNumber = 1;
let run;
let PCturn = false;
let p1Btns;
let msg;
let p1Hit;

run = (num) => {
  let pcHitForBalling = pcRandomNo();
  console.log("PC => " + pcHitForBalling);
  console.log("You => " + num);
  p1Hit = document.querySelector(".p1-hit");
  if (pcHitForBalling === num) {
  // if ([1, 2, 3, 4, 5, 6].includes(pcHitForBalling)) {
    p1Btns = document.querySelectorAll(".run-btn");
    if (p1BatsmanNumber < 3) {
      msg = confirm(`OUT, turn of batsman no: ${++p1BatsmanNumber}
      press OK`);
    } else {
      setTimeout(() => {
        msg = alert(`all team out
        its PC turn`);
        let target = document.querySelector('.target');
        target.innerHTML = `Target: ${p1Score}`
      }, 1);
      PCturn = true;
      p1Btns.forEach((el) => el.setAttribute("disabled", "disabled"));
      setTimeout(pcBatting, 1);
    }
    p1Hit.innerHTML = num;
  } else {
    p1Score += num;
    p1total.innerHTML = p1Score;
    p1Hit.innerHTML = num;
  }
};

let pcBatting = () => {
  let startingPcTurn = confirm("Its pc turn now, press OK to beat PC !!");
  p1Hit.innerHTML = "- -";
  pcBalled.innerHTML = "- -";

  if (startingPcTurn) {
    p1Btns.forEach((el) => el.removeAttribute("disabled"));
    p1Btns.forEach((el) => el.removeAttribute("onclick"));
    for (let i = 0; i < 6; i++) {
      p1Btns[i] = p1Btns[i].setAttribute("onclick", `balling(${i + 1})`);
      // console.log(p1Btns[i]);
    }
    console.log(`============= *-*-* PC Turn *-*-*  ============`);
  }
};

{
  /* <button class="run-btn" onclick="balling(5)">6</button> */
}

let pcScore = 0;
let pcBatsmanNumber = 1;
let balling;
let pcTotal;
let pcHitForBatting;
balling = (num) => {
  let isOut = false;
  pcHitForBatting = pcRandomNo(); //5
  pcTotal = document.querySelector(".pc-total");
  if (pcBatsmanNumber <= 3) {
    console.log("PC => " + pcHitForBatting);
    console.log("You => " + num);
    p1Hit.innerHTML = num;
    if (num === pcHitForBatting) {
      console.log(`*-*-* out no: ${pcBatsmanNumber} *-*-*`);
      pcBatsmanNumber++;
      if (pcBatsmanNumber<4) {
        alert(`OUT, turn of batsman no: ${pcBatsmanNumber}`);
      }else{
        isOut = true;
      }
    } else {
      pcBalled.innerHTML = pcHitForBatting;
      pcScore += pcHitForBatting;
      pcTotal.innerHTML = pcScore;
    }
  } 
  if(isOut === true){
    p1Btns.forEach((el) => el.setAttribute("disabled", "disabled"));
    console.log("All team out");
    if(p1Score>pcScore){
      alert(`All team out
player 1 Wins !!!`)
      }
      else{
      alert(`All team out
PC Wins !!!`)
    }
  }

  // const ix = p1Btns.findIndex((_, index) => index+1 === Ran);
  // pcScore += Ran + 1;
};
