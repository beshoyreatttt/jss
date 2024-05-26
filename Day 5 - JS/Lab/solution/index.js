// let telephone = '01023456771';
// if (telephone.match(/^(01)(2|0|5|1)\d{8}$/)) {
//   document.write('good number')
// }

// Create array that contain some tips about JavaScript (Array of 10 strings, each string
//   is tip about JS), and show random tip for the user each time he opens the page "Tip of
//   the day".

// let randomNumber, arrayOfTips;

// arrayOfTips = [
//   "Stay hydrated",
//   "Exercise daily",
//   "Eat healthy food",
//   "Get enough sleep",
//   "Read regularly",
//   "Practice gratitude",
//   "Meditate often",
//   "Limit screen time",
//   "Set clear goals",
//   "Stay positive",
// ];

// randomNumber = parseInt(Math.random() * 10);
// alert(arrayOfTips[randomNumber]);

/*
2-Make a button that display the current date and time in local format on the page.
*/

// function getDateInButton() {
//   let d = new Date();
//   document.write(d.toLocaleTimeString());
//   document.write(d.toLocaleDateString());
// }

// 3- Ask the user to enter his Email, and use function strings (Don’t use RegExp) to check
// if the Email contains @, and not in the first or last index.

// let Email = prompt("Enter Your Email : ");
// let lenghtOfEmail = Email.length - 1;
// console.log(lenghtOfEmail);
// if (Email[0] === "@" || Email[lenghtOfEmail] === "@") {
//   document.write("wrong input");
// } else if (Email.indexOf("@") < 1) {
//   document.write("wrong input");
// } else {
//   document.write(`THANK YOU!! your email is ${Email}`);
// }

//4-

let userName ;//prompt('enter your name');
let userEmail;

let checkUserName;

let checkEmail;

do {
  userName = prompt('enter your name: ');
  checkUserName = userName.match(/^([a-z]{3,} )+[a-z]{3,}$/i);
  userEmail = prompt('enter your Email: ');
  checkEmail = userEmail.match(
    /^.{3,}@.{3,}(.com.eg)|(.net.eg)|(edu.eg)|(.org.eg)$/i
  );
} while (!checkUserName&&!checkEmail);


