function Ran(){   
    let PCrun = Math.ceil((Math.random()*6));
    console.log('PC run => ' + PCrun);
    return PCrun
}



let p1total = document.querySelector('.p1-total');
let number = 0;



let run = (num)=>{ 
    number += num
    p1total.innerHTML = number;
    if (Ran() === num) {
        let p1Btns = document.querySelectorAll('.run-btn');
        p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
    }
    console.log('Player run => '+num);
    // console.log(Ran());

}








































































































// let run1 = ()=>{
//     console.log(1);
//     number += 1
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
// }
// let run2 = ()=>{
//     console.log(2);
//     number += 2
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
    
// }
// let run3 = ()=>{
//     console.log(3);
//     number += 3
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
    
// }
// let run4 = ()=>{
//     console.log(4);
//     number += 4
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
    
// }
// let run5 = ()=>{
//     console.log(5);
//     number += 5
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
    
// }
// let run6 = ()=>{
//     console.log(6);
//     number += 6
//     p1total.innerHTML = number;
//     console.log(Ran());
//     if (Ran() === 1) {
//         let p1Btns = document.querySelectorAll('.run-btn');
//         p1Btns.forEach(el => el.setAttribute("disabled", "disabled"))
//     }
    
// }


    
