// let inter;
// // let nowTime;
// function showTime() {
//   let d = new Date();
//   let text = d.toTimeString();
//   return text.slice(0, 8);
// }
// function writeElement() {
//   document.getElementById("clock").innerHTML = showTime();
// }
// // const d = new Date();
// // let text = d.toTimeString();
// // console.log(text.slice(0,8));

// /*
// 1-	Create a new page that has a textbox, and
//  alertthe code of key pressed on a textbox, andwhich mouse button clicked on it.
// */

// function SelectMe() {
//   alert(getSelection());
// }

// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;
// let x = document.querySelector("#img1").addEventListener("click", function a() {
//   document.querySelector("#c1").innerHTML = counter1++;
// });
// let y = document.querySelector("#img2").addEventListener("click", function b() {
//   document.querySelector("#c2").innerHTML = counter2++;
// });
// let z = document.querySelector("#img3").addEventListener("click", function c() {
//   document.querySelector("#c3").innerHTML = counter3++;
// });
// setTimeout(function () {
//   alert(
//     `score is :image one ${counter1 - 1} image two ${
//       counter2 - 1
//     } image three ${counter3 - 1}`
//   );
//   document.querySelector("#img1").removeEventListener("click", x);
//   document.querySelector("#img2").removeEventListener("click", y);
//   document.querySelector("#img3").removeEventListener("click", z);
//   counter1 = 0;
//   counter2 = 0;
//   counter3 = 0;
//   alert(" GAME OVER ");
//    x = document
//     .querySelector("#img1")
//     .addEventListener("click", function a() {
//       document.querySelector("#c1").innerHTML = counter1++;
//     });
//    y = document
//     .querySelector("#img2")
//     .addEventListener("click", function b() {
//       document.querySelector("#c2").innerHTML = counter2++;
//     });
//    z = document
//     .querySelector("#img3")
//     .addEventListener("click", function c() {
//       document.querySelector("#c3").innerHTML = counter3++;
//     });
// }, 3000);

// while (true) {
//   setTimeout(anotherActions, 3000);
// }
